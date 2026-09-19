import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkt2k58qj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkt2k58qj"/>`,
		"fallback": "icons8:asterisk",
	});
}

export default Component;
