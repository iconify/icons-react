import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivxo87-8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivxo87-8f"/>`,
		"fallback": "mono-icons:bar-chart",
	});
}

export default Component;
