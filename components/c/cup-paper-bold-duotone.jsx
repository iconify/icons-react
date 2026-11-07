import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_o-wt13s.css';
import '../../css/j/jrfk4909t.css';
import '../../css/u/u23ewcsgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_o-wt13s"/><path class="jrfk4909t"/><path class="u23ewcsgh"/>`,
		"fallback": "solar:cup-paper-bold-duotone",
	});
}

export default Component;
