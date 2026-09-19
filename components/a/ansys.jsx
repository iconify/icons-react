import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u49fm9evw.css';
import '../../css/f/fzn8913pw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u49fm9evw"/><path class="fzn8913pw"/>`,
		"fallback": "devicon:ansys",
	});
}

export default Component;
