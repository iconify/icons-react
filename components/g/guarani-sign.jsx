import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmuvz90jo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmuvz90jo"/>`,
		"fallback": "fa7-solid:guarani-sign",
	});
}

export default Component;
