import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwvj-fb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwvj-fb0f"/>`,
		"fallback": "mdi:currency-jpy",
	});
}

export default Component;
