import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m09q97s_f.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m09q97s_f"/>`,
		"fallback": "brandico:blogger-rect",
	});
}

export default Component;
