import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psiglkazx.css';
import '../../css/y/y9sy2mbmn.css';
import '../../css/y/y1yvd7_6c.css';
import '../../css/a/alu5zrk5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="psiglkazx"><path class="y9sy2mbmn"/><path class="y1yvd7_6c"/><path class="alu5zrk5n"/></g>`,
		"fallback": "gcp:bare-metal-solutions",
	});
}

export default Component;
