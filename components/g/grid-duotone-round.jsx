import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0z01hbsm.css';
import '../../css/v/v40m793pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0z01hbsm"/><path class="v40m793pd"/></g>`,
		"fallback": "coolicons:grid-duotone-round",
	});
}

export default Component;
