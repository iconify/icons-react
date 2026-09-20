import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4at4fb-j.css';
import '../../css/m/m2s2ijb7o.css';
import '../../css/s/s25lwwbet.css';
import '../../css/p/ppsfdtbll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4at4fb-j"/><path class="m2s2ijb7o"/><path class="s25lwwbet"/><path class="ppsfdtbll"/></g>`,
		"fallback": "streamline-flex-color:earpods",
	});
}

export default Component;
