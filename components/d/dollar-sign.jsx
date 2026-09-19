import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/encv9kbxg.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="encv9kbxg"/>`,
		"fallback": "fa-solid:dollar-sign",
	});
}

export default Component;
