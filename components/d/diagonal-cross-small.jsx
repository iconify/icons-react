import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6pc4b1a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6pc4b1a"/>`,
		"fallback": "dinkie-icons:diagonal-cross-small",
	});
}

export default Component;
