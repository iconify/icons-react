import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqnm1rstj.css';
import '../../css/p/pmzrqcc7c.css';
import '../../css/b/bv8dp0iic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqnm1rstj"/><path class="pmzrqcc7c"/><path class="bv8dp0iic"/>`,
		"fallback": "energy-icons:butterfly-valve-48-bold",
	});
}

export default Component;
