import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnr_e_b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnr_e_b2j"/>`,
		"fallback": "hugeicons:call-outgoing-01",
	});
}

export default Component;
