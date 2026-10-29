import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcgdo5bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcgdo5bpc"/>`,
		"fallback": "withicons:address-book-solid",
	});
}

export default Component;
