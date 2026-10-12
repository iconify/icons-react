import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrh0vqtny.css';
import '../../css/q/qen7bk-jg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrh0vqtny"/><path class="qen7bk-jg"/>`,
		"fallback": "garden:check-square-stroke-20",
	});
}

export default Component;
