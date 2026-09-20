import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmjlz_b5w.css';
import '../../css/f/f-tq-dhdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmjlz_b5w"/><path class="f-tq-dhdc"/>`,
		"fallback": "selfhst:erugo",
	});
}

export default Component;
