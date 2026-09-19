import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjke9fltu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjke9fltu"/>`,
		"fallback": "fluent-mdl2:import-all-mirrored",
	});
}

export default Component;
