import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oax_uo-bh.css';
import '../../css/q/q-6bjtb-l.css';
import '../../css/g/g8itcgf_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oax_uo-bh"/><path class="q-6bjtb-l"/><path class="g8itcgf_r"/>`,
		"fallback": "stash:globe-timezone",
	});
}

export default Component;
