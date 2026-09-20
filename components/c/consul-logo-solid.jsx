import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk8p9lbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk8p9lbvf"/>`,
		"fallback": "streamline-logos:consul-logo-solid",
	});
}

export default Component;
