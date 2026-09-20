import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/o/o98v_25uz.css';
import '../../css/q/qk4nqgb7x.css';
import '../../css/l/lwa-rvbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="o98v_25uz"/><path class="qk4nqgb7x"/><path class="lwa-rvbps"/></g>`,
		"fallback": "lets-icons:folder-open",
	});
}

export default Component;
