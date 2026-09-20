import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-8hfbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yj-8hfbzq"/>`,
		"fallback": "streamline-logos:bloglovin-logo-block",
	});
}

export default Component;
