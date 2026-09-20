import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3-2hw.css';
import '../../css/y/ydovum.css';
import '../../css/e/e261aa.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';
import '../../css/d/d-escncg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3-2hw ydovum"/><path class="e261aa ydovum"/>`,
		"fallback": "line-md:cloud-alt-download-twotone-loop",
	});
}

export default Component;
