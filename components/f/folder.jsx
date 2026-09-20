import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-21fi9kw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-21fi9kw"/>`,
		"fallback": "subway:folder",
	});
}

export default Component;
