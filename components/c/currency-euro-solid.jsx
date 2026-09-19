import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpe_dfizg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpe_dfizg"/>`,
		"fallback": "heroicons:currency-euro-solid",
	});
}

export default Component;
