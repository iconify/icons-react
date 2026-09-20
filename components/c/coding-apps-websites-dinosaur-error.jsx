import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb66y-qhg.css';
import '../../css/k/kxh3svikf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb66y-qhg"/><path class="kxh3svikf"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-dinosaur-error",
	});
}

export default Component;
