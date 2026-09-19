import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm3k6z7iw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm3k6z7iw"/>`,
		"fallback": "fluent-mdl2:chevron-left",
	});
}

export default Component;
