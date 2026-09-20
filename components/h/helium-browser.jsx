import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzffiib9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzffiib9n"/>`,
		"fallback": "thesvg-color:helium-browser",
	});
}

export default Component;
