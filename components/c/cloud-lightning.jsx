import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0-xzpt5k.css';
import '../../css/n/nrqatuf6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer p0-xzpt5k"/><path class="duoicon-secondary-layer nrqatuf6n"/>`,
		"fallback": "duo-icons:cloud-lightning",
	});
}

export default Component;
