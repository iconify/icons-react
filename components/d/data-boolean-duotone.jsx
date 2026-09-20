import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crs9g4qvt.css';
import '../../css/f/fbk-2ebdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crs9g4qvt"/><path clip-rule="evenodd" class="fbk-2ebdd"/>`,
		"fallback": "stash:data-boolean-duotone",
	});
}

export default Component;
