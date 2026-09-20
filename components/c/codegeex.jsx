import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8cxxfwzf.css';
import '../../css/c/cqn9vuf8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8cxxfwzf"/><path class="cqn9vuf8t"/>`,
		"fallback": "thesvg-color:codegeex",
	});
}

export default Component;
