import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/g/grw0dgbik.css';
import '../../css/o/oajhruw5p.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/i/i7tbmsb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="grw0dgbik wm-k"/><path class="oajhruw5p wm-k"/><path class="rjg00-qxz wm-shine"/><path class="i7tbmsb-i wm-a"/></g>`,
		"fallback": "withicons-anime:circle-chevron-left",
	});
}

export default Component;
