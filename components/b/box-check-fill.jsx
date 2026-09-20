import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzjy1cc-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzjy1cc-p"/>`,
		"fallback": "mage:box-check-fill",
	});
}

export default Component;
