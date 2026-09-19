import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg6b8sbxr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg6b8sbxr"/>`,
		"fallback": "devicon-plain:hyprland",
	});
}

export default Component;
