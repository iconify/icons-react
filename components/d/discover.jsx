import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l15u55g8b.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l15u55g8b"/>`,
		"fallback": "fontisto:discover",
	});
}

export default Component;
