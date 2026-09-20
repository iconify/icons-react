import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbr-cwb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbr-cwb8x"/>`,
		"fallback": "thesvg-color:copa-airlines",
	});
}

export default Component;
