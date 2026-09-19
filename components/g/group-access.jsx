import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj81mac8p.css';
import '../../css/b/b0-g4tear.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj81mac8p"/><path class="b0-g4tear"/>`,
		"fallback": "carbon:group-access",
	});
}

export default Component;
