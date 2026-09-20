import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcrvpl9sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcrvpl9sx"/>`,
		"fallback": "reicon:barcode-filled",
	});
}

export default Component;
