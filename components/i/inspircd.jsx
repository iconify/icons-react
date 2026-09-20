import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5x_o2bjy.css';
import '../../css/z/zo1w86b7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5x_o2bjy"/><path class="zo1w86b7y"/>`,
		"fallback": "selfhst:inspircd",
	});
}

export default Component;
