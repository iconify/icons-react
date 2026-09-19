import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uak386bcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uak386bcg"/>`,
		"fallback": "fa6-regular:circle-stop",
	});
}

export default Component;
