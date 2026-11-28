import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkxfvs8vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkxfvs8vc"/>`,
		"fallback": "noviair:file-audio-x",
	});
}

export default Component;
