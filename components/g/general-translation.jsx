import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etah7iban.css';

const viewBox = {"width":215.696,"height":215.696,"left":20.152,"top":20.152};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etah7iban"/>`,
		"fallback": "thesvg:general-translation",
	});
}

export default Component;
