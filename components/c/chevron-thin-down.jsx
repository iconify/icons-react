import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqn8ef0hn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqn8ef0hn"/>`,
		"fallback": "entypo:chevron-thin-down",
	});
}

export default Component;
