import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_8ytmbdv.css';
import '../../css/n/nicoetbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_8ytmbdv"/><path class="nicoetbmf"/>`,
		"fallback": "lucide-extended:chart-pie-filled",
	});
}

export default Component;
