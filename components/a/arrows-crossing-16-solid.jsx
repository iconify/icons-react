import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyrw1ub6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyrw1ub6k"/>`,
		"fallback": "sidekickicons:arrows-crossing-16-solid",
	});
}

export default Component;
