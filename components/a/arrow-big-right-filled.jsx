import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_eundzvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_eundzvz"/>`,
		"fallback": "lucide-extended:arrow-big-right-filled",
	});
}

export default Component;
