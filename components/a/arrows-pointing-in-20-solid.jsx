import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxineb4qx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxineb4qx"/>`,
		"fallback": "heroicons:arrows-pointing-in-20-solid",
	});
}

export default Component;
