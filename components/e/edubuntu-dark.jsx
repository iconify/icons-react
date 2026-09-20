import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmamszr8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmamszr8w"/>`,
		"fallback": "selfhst:edubuntu-dark",
	});
}

export default Component;
