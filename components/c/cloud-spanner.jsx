import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dn5myfbwf.css';
import '../../css/c/ca5a0rbuv.css';
import '../../css/s/sltux9jbj.css';
import '../../css/s/s-dq4inme.css';
import '../../css/s/sij6f2sib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dn5myfbwf"/><path class="ca5a0rbuv"/><path class="sltux9jbj"/><path class="s-dq4inme"/><path class="sij6f2sib"/></g>`,
		"fallback": "gcp:cloud-spanner",
	});
}

export default Component;
