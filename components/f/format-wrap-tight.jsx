import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb3nn5obp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb3nn5obp"/>`,
		"fallback": "mdi-light:format-wrap-tight",
	});
}

export default Component;
