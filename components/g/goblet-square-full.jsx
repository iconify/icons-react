import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lycl2fbzo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lycl2fbzo"/>`,
		"fallback": "ep:goblet-square-full",
	});
}

export default Component;
