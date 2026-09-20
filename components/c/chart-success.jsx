import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx9s66bso.css';
import '../../css/h/hntgybcog.css';
import '../../css/e/e30zw1b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG3rlZXbHi" class="zx9s66bso"/></defs><g class="hntgybcog"><use href="#SVG3rlZXbHi"/><use href="#SVG3rlZXbHi"/><path class="e30zw1b0w"/></g>`,
		"fallback": "reicon:chart-success",
	});
}

export default Component;
