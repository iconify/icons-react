import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw-97iyer.css';
import '../../css/a/az4h9ufdp.css';
import '../../css/p/pc91ydrlr.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw-97iyer"/><path class="az4h9ufdp"/><path class="pc91ydrlr"/>`,
		"fallback": "tabler-flags:botswana",
	});
}

export default Component;
