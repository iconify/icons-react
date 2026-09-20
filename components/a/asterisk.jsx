import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oox-7jbzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oox-7jbzf"/>`,
		"fallback": "ooui:asterisk",
	});
}

export default Component;
