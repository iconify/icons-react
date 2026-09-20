import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd4m4tkzl.css';
import '../../css/e/ebd7f4inr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd4m4tkzl"/><path class="ebd7f4inr"/>`,
		"fallback": "uim:android-alt",
	});
}

export default Component;
