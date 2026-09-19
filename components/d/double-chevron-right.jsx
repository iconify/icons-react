import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlx7eibfs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlx7eibfs"/>`,
		"fallback": "fluent-mdl2:double-chevron-right",
	});
}

export default Component;
