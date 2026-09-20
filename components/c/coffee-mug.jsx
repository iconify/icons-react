import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/feku8wixg.css';
import '../../css/b/b8jih2bfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="feku8wixg"/><path class="b8jih2bfw"/></g>`,
		"fallback": "streamline-color:coffee-mug",
	});
}

export default Component;
