import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzab02bem.css';
import '../../css/r/rl2fx36gi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzab02bem"/><path class="rl2fx36gi"/>`,
		"fallback": "carbon:delivery",
	});
}

export default Component;
