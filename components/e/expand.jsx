import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgdbr_pqg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgdbr_pqg"/>`,
		"fallback": "iwwa:expand",
	});
}

export default Component;
