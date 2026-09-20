import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/err-wkw4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="err-wkw4b"/>`,
		"fallback": "token:idex",
	});
}

export default Component;
