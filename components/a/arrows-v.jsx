import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6azs0btd.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6azs0btd"/>`,
		"fallback": "jam:arrows-v",
	});
}

export default Component;
