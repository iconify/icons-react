import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfcmd9bxj.css';
import '../../css/g/gv22t7b6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfcmd9bxj"/><path class="gv22t7b6a"/>`,
		"fallback": "carbon:hospital-bed",
	});
}

export default Component;
