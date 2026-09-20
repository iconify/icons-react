import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz4mkebaq.css';
import '../../css/y/ylzf4_8rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz4mkebaq"/><path class="ylzf4_8rg"/>`,
		"fallback": "pixel:giphy",
	});
}

export default Component;
