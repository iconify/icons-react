import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-mjg0wu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz-mjg0wu"/>`,
		"fallback": "f7:grid",
	});
}

export default Component;
