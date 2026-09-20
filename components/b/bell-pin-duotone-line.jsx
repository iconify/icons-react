import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2f075blp.css';
import '../../css/i/i2smr173a.css';
import '../../css/m/mnsmfnpyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e2f075blp"/><circle class="i2smr173a"/><path class="mnsmfnpyz"/></g>`,
		"fallback": "lets-icons:bell-pin-duotone-line",
	});
}

export default Component;
