import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir-l3d4bi.css';
import '../../css/o/od-orcbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir-l3d4bi"/><path class="od-orcbyj"/>`,
		"fallback": "bxl:deepmind",
	});
}

export default Component;
