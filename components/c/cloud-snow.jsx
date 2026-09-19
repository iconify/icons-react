import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8fc5u6ec.css';
import '../../css/i/iiydukdos.css';
import '../../css/g/g4-28t0-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer t8fc5u6ec"/><path class="duoicon-secondary-layer iiydukdos"/><path class="duoicon-primary-layer g4-28t0-k"/>`,
		"fallback": "duo-icons:cloud-snow",
	});
}

export default Component;
