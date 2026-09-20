import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajmjvabeq.css';
import '../../css/a/acfb3gbef.css';

const viewBox = {"width":208,"height":92};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajmjvabeq"/><path class="acfb3gbef"/>`,
		"fallback": "thesvg-color:amul-info",
	});
}

export default Component;
