import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx60_7i_g.css';
import '../../css/a/arylohbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx60_7i_g wm-k"/><path class="arylohbyl wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-down",
	});
}

export default Component;
