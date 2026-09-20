import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z980qyblv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z980qyblv"/>`,
		"fallback": "streamline:camera-disabled-solid",
	});
}

export default Component;
