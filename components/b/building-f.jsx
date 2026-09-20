import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q49_fbchc.css';

const viewBox = {"width":24,"height":24,"left":-5.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q49_fbchc"/>`,
		"fallback": "jam:building-f",
	});
}

export default Component;
