import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx5n8lb2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx5n8lb2i"/>`,
		"fallback": "famicons:git-merge-sharp",
	});
}

export default Component;
