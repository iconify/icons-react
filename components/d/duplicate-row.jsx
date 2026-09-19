import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjpu1iqye.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjpu1iqye"/>`,
		"fallback": "fluent-mdl2:duplicate-row",
	});
}

export default Component;
