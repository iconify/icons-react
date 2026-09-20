import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-6z_vbkk.css';
import '../../css/w/wzwgf_62j.css';
import '../../css/i/iaho8hehc.css';

const viewBox = {"width":188.086,"height":50.041};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g-6z_vbkk"><path class="wzwgf_62j"/><path class="iaho8hehc"/></g>`,
		"fallback": "thesvg-color:hershey",
	});
}

export default Component;
