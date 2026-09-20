import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv5evy_iv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv5evy_iv"/>`,
		"fallback": "octicon:feed-plus-16",
	});
}

export default Component;
