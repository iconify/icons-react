import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2ratgbvs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2ratgbvs"/>`,
		"fallback": "fa7-solid:circle",
	});
}

export default Component;
