import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvkz25b3t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nvkz25b3t"/>`,
		"fallback": "lineicons:calculator-alt",
	});
}

export default Component;
