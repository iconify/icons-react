import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn_ll_bay.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn_ll_bay"/>`,
		"fallback": "el:hearing-impaired",
	});
}

export default Component;
