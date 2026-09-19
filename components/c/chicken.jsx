import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3_gg71sm.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3_gg71sm"/>`,
		"fallback": "vs:chicken",
	});
}

export default Component;
