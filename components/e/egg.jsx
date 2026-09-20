import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saj0lv78a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saj0lv78a"/>`,
		"fallback": "temaki:egg",
	});
}

export default Component;
