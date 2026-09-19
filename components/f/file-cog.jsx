import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixwkb7bem.css';
import '../../css/a/aie3xzkwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixwkb7bem"/><path class="aie3xzkwz"/>`,
		"fallback": "boxicons:file-cog",
	});
}

export default Component;
