import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkxwlfbdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkxwlfbdd"/>`,
		"fallback": "game-icons:hypodermic-test",
	});
}

export default Component;
