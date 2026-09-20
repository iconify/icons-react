import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6qv59w-v.css';
import '../../css/y/ypwg_3bxo.css';

const viewBox = {"width":1113,"height":1225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6qv59w-v"/><path class="ypwg_3bxo"/>`,
		"fallback": "thesvg-color:howlerjs",
	});
}

export default Component;
