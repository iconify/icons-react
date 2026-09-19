import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuhzw_-te.css';
import '../../css/g/gn7buhpvc.css';

const viewBox = {"width":9,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuhzw_-te"/><path class="gn7buhpvc"/>`,
		"fallback": "formkit:arrowdown",
	});
}

export default Component;
