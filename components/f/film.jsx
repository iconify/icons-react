import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agdrazf8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agdrazf8z"/>`,
		"fallback": "bxs:film",
	});
}

export default Component;
