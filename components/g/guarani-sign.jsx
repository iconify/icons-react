import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk8pm6jyr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk8pm6jyr"/>`,
		"fallback": "fa6-solid:guarani-sign",
	});
}

export default Component;
