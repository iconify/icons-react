import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0adcrzki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0adcrzki"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square-16-solid",
	});
}

export default Component;
