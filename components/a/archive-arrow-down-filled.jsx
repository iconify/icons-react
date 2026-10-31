import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moy2mkktn.css';
import '../../css/r/rhjy80e-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="moy2mkktn"/><path class="rhjy80e-a"/>`,
		"fallback": "lucide-extended:archive-arrow-down-filled",
	});
}

export default Component;
