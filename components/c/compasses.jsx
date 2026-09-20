import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/htfy8iboz.css';
import '../../css/c/ci9n5fg2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="htfy8iboz"/><path class="ci9n5fg2a"/></g>`,
		"fallback": "streamline-cyber:compasses",
	});
}

export default Component;
