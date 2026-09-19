import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwb8jyb7n.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwb8jyb7n"/>`,
		"fallback": "el:delicious",
	});
}

export default Component;
