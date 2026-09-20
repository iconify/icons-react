import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btr1ub_7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btr1ub_7x"/>`,
		"fallback": "vadivam:barcode",
	});
}

export default Component;
