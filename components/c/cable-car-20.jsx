import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_s3vbgy.css';
import '../../css/q/q02_wz2ag.css';
import '../../css/y/y0bo9t7jj.css';
import '../../css/w/wm5qxnnej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_s3vbgy"/><path class="q02_wz2ag"/><path class="y0bo9t7jj"/><path class="wm5qxnnej"/>`,
		"fallback": "energy-icons:cable-car-20",
	});
}

export default Component;
