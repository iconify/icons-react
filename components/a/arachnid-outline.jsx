import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb95u623t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb95u623t"/>`,
		"fallback": "mdi:arachnid-outline",
	});
}

export default Component;
