import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zldz03bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zldz03bhn"/>`,
		"fallback": "iconaut:barcode-duo",
	});
}

export default Component;
