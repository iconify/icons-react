import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs08r5bpq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rs08r5bpq"/>`,
		"fallback": "teenyicons:double-caret-left-circle-solid",
	});
}

export default Component;
