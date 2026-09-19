import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_v2wbiq.css';

const viewBox = {"width":455,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac_v2wbiq"/>`,
		"fallback": "ls:f-upper-case",
	});
}

export default Component;
