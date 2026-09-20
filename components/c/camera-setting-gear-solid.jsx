import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwo6jxbkm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iwo6jxbkm"/>`,
		"fallback": "streamline-flex:camera-setting-gear-solid",
	});
}

export default Component;
