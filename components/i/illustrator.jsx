import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm581lbny.css';
import '../../css/v/v7vmxtb6b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm581lbny"/><path class="v7vmxtb6b"/>`,
		"fallback": "devicon:illustrator",
	});
}

export default Component;
