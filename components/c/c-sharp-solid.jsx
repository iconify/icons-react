import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8p6y7blj.css';
import '../../css/m/ma5_rlb1n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8p6y7blj"/><path clip-rule="evenodd" class="ma5_rlb1n"/>`,
		"fallback": "teenyicons:c-sharp-solid",
	});
}

export default Component;
