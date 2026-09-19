import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpcg-pb1g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpcg-pb1g"/>`,
		"fallback": "f7:app-fill",
	});
}

export default Component;
