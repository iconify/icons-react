import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3blzff5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3blzff5d"/>`,
		"fallback": "at-icons:boxing-glove",
	});
}

export default Component;
