import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imq8vsb_p.css';
import '../../css/a/aiokedbqd.css';
import '../../css/s/svdkiwb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imq8vsb_p"/><path class="aiokedbqd"/><path class="svdkiwb7s"/>`,
		"fallback": "token:dseth",
	});
}

export default Component;
