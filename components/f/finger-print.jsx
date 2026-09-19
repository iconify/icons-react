import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwqbf5jyq.css';
import '../../css/y/yn6l3fqyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dwqbf5jyq"/><path class="yn6l3fqyv"/></g>`,
		"fallback": "hugeicons:finger-print",
	});
}

export default Component;
