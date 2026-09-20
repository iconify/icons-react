import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxgdie26v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxgdie26v"/>`,
		"fallback": "streamline-flex:erlenmeyer-flask-solid",
	});
}

export default Component;
