import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-rfr86ir.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-rfr86ir"/>`,
		"fallback": "whh:diefive",
	});
}

export default Component;
