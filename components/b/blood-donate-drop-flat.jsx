import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chflfjb4d.css';
import '../../css/g/gx20zyb2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="chflfjb4d"/><path class="gx20zyb2c"/></g>`,
		"fallback": "streamline-flex-color:blood-donate-drop-flat",
	});
}

export default Component;
