import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u61vl1b-h.css';
import '../../css/u/ud94oijxq.css';
import '../../css/h/h2dcacdji.css';
import '../../css/s/s_hyqiben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u61vl1b-h"/><path class="ud94oijxq"/><path class="h2dcacdji"/><path class="s_hyqiben"/>`,
		"fallback": "token:dmc",
	});
}

export default Component;
