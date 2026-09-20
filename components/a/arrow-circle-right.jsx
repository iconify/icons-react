import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuqt_yb-q.css';
import '../../css/m/mypw44bvm.css';
import '../../css/x/xfpsz_bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuqt_yb-q"/><path class="mypw44bvm"/><path class="xfpsz_bsa"/>`,
		"fallback": "prime:arrow-circle-right",
	});
}

export default Component;
