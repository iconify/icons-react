import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4kmxzbqa.css';
import '../../css/m/m2awv3b3q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4kmxzbqa"/><path class="m2awv3b3q"/>`,
		"fallback": "devicon-plain:godot",
	});
}

export default Component;
