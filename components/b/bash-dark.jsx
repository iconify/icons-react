import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd4435b7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd4435b7d"/>`,
		"fallback": "thesvg-color:bash-dark",
	});
}

export default Component;
