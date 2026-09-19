import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvk_-kegd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvk_-kegd"/>`,
		"fallback": "fa7-solid:audio-description",
	});
}

export default Component;
