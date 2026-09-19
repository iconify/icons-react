import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8ucuebqy.css';
import '../../css/t/t-aq49b1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8ucuebqy"/><path class="t-aq49b1f"/>`,
		"fallback": "carbon:edit-filter",
	});
}

export default Component;
