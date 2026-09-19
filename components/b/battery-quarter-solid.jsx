import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9-n_p_wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j9-n_p_wf"/>`,
		"fallback": "basil:battery-quarter-solid",
	});
}

export default Component;
