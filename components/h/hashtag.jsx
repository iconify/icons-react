import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek0dmobsw.css';

const viewBox = {"width":1728,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek0dmobsw"/>`,
		"fallback": "fa:hashtag",
	});
}

export default Component;
