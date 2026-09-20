import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om-zcd1ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om-zcd1ev"/>`,
		"fallback": "mynaui:brand-google",
	});
}

export default Component;
