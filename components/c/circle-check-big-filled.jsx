import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhi8lybtb.css';
import '../../css/l/lgjscu5ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhi8lybtb"/><path class="lgjscu5ps"/>`,
		"fallback": "lucide-extended:circle-check-big-filled",
	});
}

export default Component;
