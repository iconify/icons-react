import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjn59jb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjn59jb0r"/>`,
		"fallback": "tdesign:install-mobile",
	});
}

export default Component;
