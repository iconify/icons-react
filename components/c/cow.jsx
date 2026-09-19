import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_vr9bzd.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1_vr9bzd"/>`,
		"fallback": "fa6-solid:cow",
	});
}

export default Component;
