import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_li8cc6d.css';
import '../../css/t/t9ck36orq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_li8cc6d"/><path class="t9ck36orq"/>`,
		"fallback": "uim:clock-seven",
	});
}

export default Component;
