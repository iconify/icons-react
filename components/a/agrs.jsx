import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in6jc3bsu.css';
import '../../css/z/z46kgibda.css';
import '../../css/p/p4x9h9btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in6jc3bsu"/><path class="z46kgibda"/><path class="p4x9h9btd"/>`,
		"fallback": "token:agrs",
	});
}

export default Component;
