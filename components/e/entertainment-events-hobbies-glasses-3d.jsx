import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1mc4j4if.css';
import '../../css/h/hg6am7bho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1mc4j4if"/><path class="hg6am7bho"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-glasses-3d",
	});
}

export default Component;
