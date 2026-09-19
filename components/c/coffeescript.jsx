import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/y/yojx2obqy.css';
import '../../css/y/y9hdzabck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="yojx2obqy"/><path class="y9hdzabck"/></g>`,
		"fallback": "catppuccin:coffeescript",
	});
}

export default Component;
