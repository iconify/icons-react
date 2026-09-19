import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vrj7zob5e.css';
import '../../css/g/ghrjw3d7b.css';
import '../../css/x/xdn6abclq.css';
import '../../css/z/z3t4bn4rn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vrj7zob5e"/><circle class="ghrjw3d7b"/><circle class="xdn6abclq"/><circle class="z3t4bn4rn"/></g>`,
		"fallback": "foundation:crown",
	});
}

export default Component;
