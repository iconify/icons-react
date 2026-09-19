import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zshm6db-x.css';
import '../../css/v/v9nm23b6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zshm6db-x"/><circle class="v9nm23b6j"/>`,
		"fallback": "cil:golf",
	});
}

export default Component;
