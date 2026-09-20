import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw9-pfc_q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hw9-pfc_q"/>`,
		"fallback": "teenyicons:bottom-left-solid",
	});
}

export default Component;
