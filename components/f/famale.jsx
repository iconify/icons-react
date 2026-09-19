import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7n05ph0l.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7n05ph0l"/>`,
		"fallback": "fontisto:famale",
	});
}

export default Component;
