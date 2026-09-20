import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj083o.css';
import '../../css/y/ydovum.css';
import '../../css/v/vyup4q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj083o ydovum"/><path class="vyup4q ydovum"/>`,
		"fallback": "line-md:cloud-alt-download-twotone",
	});
}

export default Component;
