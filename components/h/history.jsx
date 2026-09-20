import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvm4kcb4a.css';
import '../../css/f/fu2jxxb6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvm4kcb4a"/><path class="fu2jxxb6d"/>`,
		"fallback": "nimbus:history",
	});
}

export default Component;
