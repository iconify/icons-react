import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6eb6zbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6eb6zbaw"/>`,
		"fallback": "mage:chart-50-fill",
	});
}

export default Component;
