import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bitiamboi.css';
import '../../css/z/zbnf4mu7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bitiamboi"/><path class="zbnf4mu7e"/>`,
		"fallback": "bx:bxl-aws",
	});
}

export default Component;
