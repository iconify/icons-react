import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-rr4hcr.css';
import '../../css/t/tjeffabft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-rr4hcr"/><path class="tjeffabft"/>`,
		"fallback": "energy-icons:corner-up-left-20",
	});
}

export default Component;
