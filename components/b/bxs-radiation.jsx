import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em9miyxzj.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em9miyxzj"/><circle class="v4i2ew1ke"/>`,
		"fallback": "bx:bxs-radiation",
	});
}

export default Component;
