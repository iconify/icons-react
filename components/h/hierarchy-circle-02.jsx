import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gglsf5jgx.css';
import '../../css/k/kxe36xeye.css';
import '../../css/k/kc3talsdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gglsf5jgx"/><path class="kxe36xeye"/><path class="kc3talsdv"/></g>`,
		"fallback": "hugeicons:hierarchy-circle-02",
	});
}

export default Component;
