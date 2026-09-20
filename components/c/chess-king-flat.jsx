import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fvgkh2c7g.css';
import '../../css/y/ywwzxm1rs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fvgkh2c7g"/><path class="ywwzxm1rs"/></g>`,
		"fallback": "streamline-flex-color:chess-king-flat",
	});
}

export default Component;
