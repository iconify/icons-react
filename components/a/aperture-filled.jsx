import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xamlzre0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xamlzre0d"/>`,
		"fallback": "lucide-extended:aperture-filled",
	});
}

export default Component;
