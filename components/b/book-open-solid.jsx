import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4mpzb8r.css';
import '../../css/y/y3xz-nb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov4mpzb8r"/><path class="y3xz-nb8j"/>`,
		"fallback": "basil:book-open-solid",
	});
}

export default Component;
