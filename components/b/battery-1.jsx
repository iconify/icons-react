import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abt6-fbbw.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abt6-fbbw"/>`,
		"fallback": "fa:battery-1",
	});
}

export default Component;
