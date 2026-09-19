import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw64dbbep.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw64dbbep"/>`,
		"fallback": "vs:f04d",
	});
}

export default Component;
