import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue1naxbat.css';
import '../../css/w/wwd7qgbpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue1naxbat"/><path class="wwd7qgbpp"/>`,
		"fallback": "garden:arrow-left-fill-16",
	});
}

export default Component;
