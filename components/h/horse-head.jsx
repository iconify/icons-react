import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsh_0bvcs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsh_0bvcs"/>`,
		"fallback": "fa6-solid:horse-head",
	});
}

export default Component;
