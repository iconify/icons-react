import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af85et9ie.css';
import '../../css/g/go148f1nh.css';
import '../../css/d/do_m1aczd.css';
import '../../css/c/c3w3ojdxg.css';
import '../../css/d/d7kh4ubqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="af85et9ie"/><path class="go148f1nh"/><path class="do_m1aczd"/><path class="c3w3ojdxg"/><path class="d7kh4ubqo"/></g>`,
		"fallback": "andrsrxn:cloud-sun-rain-wind",
	});
}

export default Component;
