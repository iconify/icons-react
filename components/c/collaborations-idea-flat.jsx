import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cssjlfbuj.css';
import '../../css/c/cvlfivb9s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cssjlfbuj"/><path class="cvlfivb9s"/></g>`,
		"fallback": "streamline-color:collaborations-idea-flat",
	});
}

export default Component;
