import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uws83sbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uws83sbqw"/>`,
		"fallback": "token:agld",
	});
}

export default Component;
