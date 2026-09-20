import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqrzi_b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kqrzi_b_i"/>`,
		"fallback": "thesvg:ag-ui",
	});
}

export default Component;
