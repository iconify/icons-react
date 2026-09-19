import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tega8ye-p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tega8ye-p"/>`,
		"fallback": "fluent-mdl2:double-chevron-left-12",
	});
}

export default Component;
