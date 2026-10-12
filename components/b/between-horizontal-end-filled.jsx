import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swzmu3awr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swzmu3awr"/>`,
		"fallback": "lucide-extended:between-horizontal-end-filled",
	});
}

export default Component;
