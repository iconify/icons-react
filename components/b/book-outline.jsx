import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sii5elbef.css';
import '../../css/v/vdb-37byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sii5elbef"/><path clip-rule="evenodd" class="vdb-37byt"/>`,
		"fallback": "basil:book-outline",
	});
}

export default Component;
