import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiwt2mb2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiwt2mb2t"/>`,
		"fallback": "teenyicons:git-branch-outline",
	});
}

export default Component;
