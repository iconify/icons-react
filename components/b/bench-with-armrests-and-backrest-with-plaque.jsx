import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmnv41bnv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmnv41bnv"/>`,
		"fallback": "pinhead:bench-with-armrests-and-backrest-with-plaque",
	});
}

export default Component;
