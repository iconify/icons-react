import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svpoicb8f.css';
import '../../css/m/mvjz70zlv.css';
import '../../css/g/gz6fy7bjr.css';
import '../../css/f/ftlm9ha6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="svpoicb8f"/><rect class="mvjz70zlv"/><path class="gz6fy7bjr"/><path class="ftlm9ha6s"/></g>`,
		"fallback": "andrsrxn:device-cpu",
	});
}

export default Component;
