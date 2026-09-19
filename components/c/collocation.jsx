import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwrkaoe0y.css';
import '../../css/o/oedplzbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwrkaoe0y"/><path class="oedplzbcd"/>`,
		"fallback": "eos-icons:collocation",
	});
}

export default Component;
