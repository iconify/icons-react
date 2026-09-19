import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em_woxjjw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em_woxjjw"/>`,
		"fallback": "f7:doc-text",
	});
}

export default Component;
