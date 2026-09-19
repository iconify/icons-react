import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3l_pqbpb.css';
import '../../css/l/lkwmxcc_x.css';
import '../../css/n/nsfh04bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3l_pqbpb"/><path class="lkwmxcc_x"/><path class="nsfh04bsk"/>`,
		"fallback": "boxicons:football-pitch-filled",
	});
}

export default Component;
