import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0l0jm5oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0l0jm5oq"/>`,
		"fallback": "solar:flame-broken",
	});
}

export default Component;
