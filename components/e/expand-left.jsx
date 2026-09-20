import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx-sycb3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx-sycb3n"/>`,
		"fallback": "pajamas:expand-left",
	});
}

export default Component;
