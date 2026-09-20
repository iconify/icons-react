import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdtm8jb-y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdtm8jb-y"/>`,
		"fallback": "pinhead:clock-face",
	});
}

export default Component;
