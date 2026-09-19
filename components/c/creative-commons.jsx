import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0wsh50g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz0wsh50g"/>`,
		"fallback": "fa7-brands:creative-commons",
	});
}

export default Component;
