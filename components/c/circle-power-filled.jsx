import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq_frzb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wq_frzb0d"/>`,
		"fallback": "lucide-extended:circle-power-filled",
	});
}

export default Component;
