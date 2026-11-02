import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb0rxhbzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gb0rxhbzc"/>`,
		"fallback": "sidekickicons:corners-pointing-in-20-solid",
	});
}

export default Component;
