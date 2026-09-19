import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsn_v_jiy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsn_v_jiy"/>`,
		"fallback": "heroicons:arrow-small-left-20-solid",
	});
}

export default Component;
