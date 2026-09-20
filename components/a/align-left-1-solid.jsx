import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebis4_zgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebis4_zgk"/>`,
		"fallback": "streamline-sharp:align-left-1-solid",
	});
}

export default Component;
