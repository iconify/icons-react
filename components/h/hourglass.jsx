import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-jdipbyr.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-jdipbyr"/>`,
		"fallback": "jam:hourglass",
	});
}

export default Component;
