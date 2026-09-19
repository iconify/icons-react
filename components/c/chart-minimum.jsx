import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpzhsfboj.css';
import '../../css/i/i8a34cbqw.css';
import '../../css/x/xxpqapb5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpzhsfboj"/><path class="i8a34cbqw"/><path class="xxpqapb5a"/>`,
		"fallback": "carbon:chart-minimum",
	});
}

export default Component;
