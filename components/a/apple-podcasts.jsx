import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs6lblcao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs6lblcao"/>`,
		"fallback": "thesvg-color:apple-podcasts",
	});
}

export default Component;
