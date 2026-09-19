import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hcent-gle.css';
import '../../css/g/glh51v3pi.css';
import '../../css/h/had8q-s7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hcent-gle"/><path clip-rule="evenodd" class="glh51v3pi"/><path class="had8q-s7j"/></g>`,
		"fallback": "icon-park-solid:building-two",
	});
}

export default Component;
