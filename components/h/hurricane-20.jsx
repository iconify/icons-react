import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej-7496ya.css';
import '../../css/b/bbhbk04qj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej-7496ya"/><path class="bbhbk04qj"/>`,
		"fallback": "energy-icons:hurricane-20",
	});
}

export default Component;
