import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok25a_71q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok25a_71q"/>`,
		"fallback": "fluent-mdl2:all-apps",
	});
}

export default Component;
