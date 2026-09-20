import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6xh5bbvt.css';
import '../../css/d/df_pnlkgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6xh5bbvt"/><path class="df_pnlkgi"/>`,
		"fallback": "lets-icons:compass-duotone-line",
	});
}

export default Component;
