import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz50v5bwb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz50v5bwb"/>`,
		"fallback": "dashicons:editor-removeformatting",
	});
}

export default Component;
