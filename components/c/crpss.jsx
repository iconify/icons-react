import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvewf3boo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvewf3boo"/>`,
		"fallback": "subway:crpss",
	});
}

export default Component;
