import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbsqho_bp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbsqho_bp"/>`,
		"fallback": "heroicons:document-currency-bangladeshi-16-solid",
	});
}

export default Component;
