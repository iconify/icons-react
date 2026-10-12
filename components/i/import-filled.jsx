import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td40zjb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td40zjb1i"/>`,
		"fallback": "lucide-extended:import-filled",
	});
}

export default Component;
