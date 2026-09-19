import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja2ive0mj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja2ive0mj"/>`,
		"fallback": "codicon:check-all",
	});
}

export default Component;
