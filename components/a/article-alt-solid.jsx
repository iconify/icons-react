import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbb8jab7i.css';
import '../../css/l/ldmh8bwhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbb8jab7i"/><path class="ldmh8bwhv"/>`,
		"fallback": "stash:article-alt-solid",
	});
}

export default Component;
