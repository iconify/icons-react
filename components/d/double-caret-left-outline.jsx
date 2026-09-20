import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2wycjbyg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2wycjbyg"/>`,
		"fallback": "teenyicons:double-caret-left-outline",
	});
}

export default Component;
