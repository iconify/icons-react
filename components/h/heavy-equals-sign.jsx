import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/murjelbxg.css';
import '../../css/y/y_31qtbyx.css';
import '../../css/x/xoiqtfx8i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="murjelbxg"/><path class="y_31qtbyx"/><path class="xoiqtfx8i"/>`,
		"fallback": "openmoji:heavy-equals-sign",
	});
}

export default Component;
