import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu8oisbcj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu8oisbcj"/>`,
		"fallback": "f7:cloud-moon",
	});
}

export default Component;
