import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahkq1en1p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahkq1en1p"/>`,
		"fallback": "fluent-mdl2:compliance-audit",
	});
}

export default Component;
