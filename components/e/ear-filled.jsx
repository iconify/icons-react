import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beuj2j22z.css';
import '../../css/l/leb0srb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beuj2j22z"/><path class="leb0srb7f"/>`,
		"fallback": "boxicons:ear-filled",
	});
}

export default Component;
