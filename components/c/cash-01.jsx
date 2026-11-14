import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/of4w63b2b.css';
import '../../css/o/o-kwjpbjy.css';
import '../../css/i/iulpltu0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="of4w63b2b"/><path class="o-kwjpbjy"/><path class="iulpltu0r"/></g>`,
		"fallback": "hugeicons:cash-01",
	});
}

export default Component;
