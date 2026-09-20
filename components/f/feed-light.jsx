import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oquc4acgh.css';
import '../../css/y/yk5n1ybrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oquc4acgh"/><path class="yk5n1ybrj"/>`,
		"fallback": "stash:feed-light",
	});
}

export default Component;
