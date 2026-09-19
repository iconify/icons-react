import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr5g2_dys.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr5g2_dys"/>`,
		"fallback": "zmdi:import-export",
	});
}

export default Component;
