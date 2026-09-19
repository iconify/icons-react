import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkkcrdbzx.css';
import '../../css/z/zkseeuhgc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkkcrdbzx"/><path class="st0 zkseeuhgc"/>`,
		"fallback": "devicon:duckdb",
	});
}

export default Component;
