import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhq5bu_3l.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhq5bu_3l"/>`,
		"fallback": "el:check",
	});
}

export default Component;
