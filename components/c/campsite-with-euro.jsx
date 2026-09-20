import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyu5p-s8f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyu5p-s8f"/>`,
		"fallback": "pinhead:campsite-with-euro",
	});
}

export default Component;
