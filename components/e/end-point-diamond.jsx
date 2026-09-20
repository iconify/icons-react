import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/o6oexibok.css';
import '../../css/u/uhh5hfjxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="o6oexibok"/><path class="uhh5hfjxu"/></g>`,
		"fallback": "streamline-flex:end-point-diamond",
	});
}

export default Component;
