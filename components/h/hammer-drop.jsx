import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl14hb56d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl14hb56d"/>`,
		"fallback": "game-icons:hammer-drop",
	});
}

export default Component;
