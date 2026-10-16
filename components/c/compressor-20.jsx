import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5n2jta6r.css';
import '../../css/t/t8fe1nbtx.css';
import '../../css/e/eg1wrabcr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5n2jta6r"/><path class="t8fe1nbtx"/><path class="eg1wrabcr"/>`,
		"fallback": "energy-icons:compressor-20",
	});
}

export default Component;
