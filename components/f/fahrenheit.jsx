import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xom7hneoz.css';
import '../../css/f/f0zl8hbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="xom7hneoz"/><path class="f0zl8hbsr"/></g>`,
		"fallback": "hugeicons:fahrenheit",
	});
}

export default Component;
