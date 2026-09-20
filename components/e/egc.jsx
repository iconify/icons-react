import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znh1p3cxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="znh1p3cxt"/>`,
		"fallback": "token:egc",
	});
}

export default Component;
