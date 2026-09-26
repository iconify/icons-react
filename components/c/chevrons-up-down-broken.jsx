import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/md2-ubbkw.css';
import '../../css/w/wjnwtubpm.css';
import '../../css/w/w3b9nxekf.css';
import '../../css/w/w3fj3ibba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="md2-ubbkw"/><path class="wjnwtubpm"/><path class="w3b9nxekf"/><path class="w3fj3ibba"/></g>`,
		"fallback": "solar:chevrons-up-down-broken",
	});
}

export default Component;
