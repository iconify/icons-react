import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zov604wmj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zov604wmj"/>`,
		"fallback": "dinkie-icons:elephant",
	});
}

export default Component;
