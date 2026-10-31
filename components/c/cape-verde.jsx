import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c85pd_b_f.css';
import '../../css/m/mu9as98bc.css';
import '../../css/m/mpcblwabv.css';
import '../../css/u/u5qijbbuz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c85pd_b_f"/><path class="mu9as98bc"/><path class="mpcblwabv"/><path class="u5qijbbuz"/>`,
		"fallback": "tabler-flags:cape-verde",
	});
}

export default Component;
