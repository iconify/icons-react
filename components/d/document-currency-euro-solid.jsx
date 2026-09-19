import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnnsfxb0b.css';
import '../../css/t/t4ibq1bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnnsfxb0b"/><path class="t4ibq1bzo"/>`,
		"fallback": "heroicons:document-currency-euro-solid",
	});
}

export default Component;
