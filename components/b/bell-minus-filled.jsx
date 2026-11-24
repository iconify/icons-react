import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbowzx8sg.css';
import '../../css/u/ue40k2bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbowzx8sg"/><path class="ue40k2bdx"/>`,
		"fallback": "lucide-extended:bell-minus-filled",
	});
}

export default Component;
