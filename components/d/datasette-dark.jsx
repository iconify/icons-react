import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvtboac2u.css';
import '../../css/m/m23pcacuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvtboac2u"/><path class="m23pcacuc"/>`,
		"fallback": "selfhst:datasette-dark",
	});
}

export default Component;
