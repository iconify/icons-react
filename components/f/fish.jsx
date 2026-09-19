import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzc6dub2d.css';
import '../../css/f/f7ljz7b1m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzc6dub2d"/><path class="f7ljz7b1m"/>`,
		"fallback": "devicon:fish",
	});
}

export default Component;
