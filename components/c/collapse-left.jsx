import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khhlnwr5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="khhlnwr5m"/>`,
		"fallback": "pajamas:collapse-left",
	});
}

export default Component;
