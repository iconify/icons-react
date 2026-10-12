import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed9bqxbqe.css';
import '../../css/a/adr3lqbau.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed9bqxbqe"/><path class="adr3lqbau"/>`,
		"fallback": "garden:header-6-20",
	});
}

export default Component;
