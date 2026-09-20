import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfe_wvkpo.css';
import '../../css/t/t3678pb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfe_wvkpo"/><path class="t3678pb4z"/>`,
		"fallback": "pixel:code-block-solid",
	});
}

export default Component;
