import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz039ij_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz039ij_s"/>`,
		"fallback": "lucide-extended:brick-wall-filled",
	});
}

export default Component;
