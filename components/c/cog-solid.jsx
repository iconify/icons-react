import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu7wg9bkj.css';
import '../../css/e/enbl2qcxm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu7wg9bkj"/><path clip-rule="evenodd" class="enbl2qcxm"/>`,
		"fallback": "teenyicons:cog-solid",
	});
}

export default Component;
