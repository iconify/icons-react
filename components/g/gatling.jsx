import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nja97d98y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nja97d98y"/>`,
		"fallback": "thesvg-color:gatling",
	});
}

export default Component;
