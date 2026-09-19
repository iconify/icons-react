import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkacrgbkn.css';
import '../../css/f/fhr0udsbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkacrgbkn"/><path class="fhr0udsbr"/>`,
		"fallback": "eos-icons:cluster-management",
	});
}

export default Component;
