import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z929_bb-t.css';
import '../../css/v/v_12yfv8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z929_bb-t"/><path class="v_12yfv8f"/>`,
		"fallback": "oui:cross-in-circle-empty",
	});
}

export default Component;
