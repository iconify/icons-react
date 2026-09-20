import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxyw-3zpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxyw-3zpa"/>`,
		"fallback": "pajamas:deployments",
	});
}

export default Component;
