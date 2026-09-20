import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi49tuoiu.css';
import '../../css/k/kzun96hrq.css';
import '../../css/i/icg4i3brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi49tuoiu"/><circle class="kzun96hrq"/><circle class="icg4i3brj"/></g>`,
		"fallback": "proicons:android",
	});
}

export default Component;
