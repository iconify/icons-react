import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn6msvbxq.css';
import '../../css/k/k3zfj-93j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pn6msvbxq"/><path class="k3zfj-93j"/></g>`,
		"fallback": "coolicons:church-duotone-round",
	});
}

export default Component;
