import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpjoh6btf.css';

const viewBox = {"width":768,"height":668};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpjoh6btf"/>`,
		"fallback": "ls:heartempty",
	});
}

export default Component;
