import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqq0l5bvw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqq0l5bvw"/>`,
		"fallback": "fa6-regular:circle-user",
	});
}

export default Component;
