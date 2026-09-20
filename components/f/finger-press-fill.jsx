import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz73pfbjo.css';
import '../../css/k/kla3-hrzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz73pfbjo"/><path class="kla3-hrzj"/>`,
		"fallback": "mingcute:finger-press-fill",
	});
}

export default Component;
