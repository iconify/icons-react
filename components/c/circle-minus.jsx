import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a6nhw7byy.css';
import '../../css/g/gl0peof1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a6nhw7byy"/><path class="gl0peof1z"/></g>`,
		"fallback": "matita:circle-minus",
	});
}

export default Component;
