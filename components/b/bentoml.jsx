import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugtm5y13q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugtm5y13q"/>`,
		"fallback": "thesvg-color:bentoml",
	});
}

export default Component;
