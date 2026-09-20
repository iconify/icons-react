import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb3ybbs_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sb3ybbs_p"/>`,
		"fallback": "pajamas:credit-card",
	});
}

export default Component;
