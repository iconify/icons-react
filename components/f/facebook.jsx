import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcjva0oju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcjva0oju"/>`,
		"fallback": "ci:facebook",
	});
}

export default Component;
