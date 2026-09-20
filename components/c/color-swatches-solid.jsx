import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1_f_ublb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1_f_ublb"/>`,
		"fallback": "streamline-flex:color-swatches-solid",
	});
}

export default Component;
