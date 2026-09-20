import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2wpyhb8a.css';
import '../../css/y/yz-cuiy2v.css';
import '../../css/t/tu0d1ccex.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o2wpyhb8a"/><path clip-rule="evenodd" class="yz-cuiy2v"/><path class="tu0d1ccex"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:file-circle",
	});
}

export default Component;
