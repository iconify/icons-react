import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjuw0mb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjuw0mb6l"/>`,
		"fallback": "thesvg:forgejo",
	});
}

export default Component;
