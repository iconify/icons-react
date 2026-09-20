import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djqqkvfyd.css';

const viewBox = {"width":145,"height":147};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djqqkvfyd"/>`,
		"fallback": "thesvg-color:alem-tv",
	});
}

export default Component;
