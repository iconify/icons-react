import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5l_z9buq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5l_z9buq"/>`,
		"fallback": "devicon-plain:inkscape",
	});
}

export default Component;
