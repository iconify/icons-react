import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljr-rm75o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljr-rm75o"/>`,
		"fallback": "basil:fast-rewind-solid",
	});
}

export default Component;
