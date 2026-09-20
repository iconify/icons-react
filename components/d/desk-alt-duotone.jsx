import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na63v48uc.css';
import '../../css/l/lnd3c0bpx.css';
import '../../css/r/rk3zggbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="na63v48uc"/><path class="lnd3c0bpx"/><path class="rk3zggbju"/></g>`,
		"fallback": "lets-icons:desk-alt-duotone",
	});
}

export default Component;
