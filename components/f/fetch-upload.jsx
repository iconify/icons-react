import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiuwblb7l.css';
import '../../css/z/zy_wagb-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiuwblb7l"/><path class="zy_wagb-g"/>`,
		"fallback": "carbon:fetch-upload",
	});
}

export default Component;
