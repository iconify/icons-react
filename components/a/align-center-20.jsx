import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti8yumbzw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti8yumbzw"/>`,
		"fallback": "garden:align-center-20",
	});
}

export default Component;
