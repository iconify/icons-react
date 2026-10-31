import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dki-1w-8i.css';
import '../../css/z/z159gwm8o.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dki-1w-8i"/><path class="z159gwm8o"/>`,
		"fallback": "tabler-flags:china",
	});
}

export default Component;
