import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa7lk71xo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa7lk71xo"/>`,
		"fallback": "fluent-mdl2:bug-block",
	});
}

export default Component;
