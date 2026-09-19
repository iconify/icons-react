import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqg2w0bre.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqg2w0bre"/>`,
		"fallback": "el:child",
	});
}

export default Component;
