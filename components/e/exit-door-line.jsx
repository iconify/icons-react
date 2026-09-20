import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak-hxv74i.css';
import '../../css/z/zzouz7bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak-hxv74i"/><path class="zzouz7bmm"/>`,
		"fallback": "mingcute:exit-door-line",
	});
}

export default Component;
