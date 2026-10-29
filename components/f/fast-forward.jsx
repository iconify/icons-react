import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0s6g77s.css';
import '../../css/o/ohftsia-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0s6g77s wm-a"/><path class="ohftsia-f wm-k"/>`,
		"fallback": "withicons-bauhaus:fast-forward",
	});
}

export default Component;
