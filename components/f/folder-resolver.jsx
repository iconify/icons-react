import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukvws-bxw.css';
import '../../css/j/jrlnttbvh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukvws-bxw"/><path class="jrlnttbvh"/>`,
		"fallback": "material-icon-theme:folder-resolver",
	});
}

export default Component;
