import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8oo2l78d.css';
import '../../css/e/ejzs483gk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8oo2l78d"/><path clip-rule="evenodd" class="ejzs483gk"/>`,
		"fallback": "qlementine-icons:boolean-union-16",
	});
}

export default Component;
