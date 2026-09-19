import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li3y_s93m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li3y_s93m"/>`,
		"fallback": "fa7-brands:delicious",
	});
}

export default Component;
