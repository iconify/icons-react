import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icsu46bas.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icsu46bas"/>`,
		"fallback": "fa6-solid:grip-lines-vertical",
	});
}

export default Component;
