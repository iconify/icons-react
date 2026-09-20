import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m52v13bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m52v13bya"/>`,
		"fallback": "mingcute:file-new-fill",
	});
}

export default Component;
