import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dmkuafbjo.css';
import '../../css/z/zimbowb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dmkuafbjo"/><path class="zimbowb2d"/></g>`,
		"fallback": "keyline-icons:git-branch-plus-sharp-duotone",
	});
}

export default Component;
