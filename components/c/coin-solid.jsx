import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4806ne8v.css';
import '../../css/j/jbx312dhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4806ne8v"/><path class="jbx312dhc"/>`,
		"fallback": "pixel:coin-solid",
	});
}

export default Component;
