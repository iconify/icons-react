import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3_yqgbcz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3_yqgbcz"/>`,
		"fallback": "dinkie-icons:cherry-blossom",
	});
}

export default Component;
