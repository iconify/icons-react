import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a58u95buk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a58u95buk"/>`,
		"fallback": "devicon-plain:azuresqldatabase",
	});
}

export default Component;
