import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqet3pb0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqet3pb0p"/>`,
		"fallback": "heroicons:home-modern-16-solid",
	});
}

export default Component;
