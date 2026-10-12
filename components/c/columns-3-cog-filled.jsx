import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whvybwb6j.css';
import '../../css/d/d0psnynrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whvybwb6j"/><path class="d0psnynrw"/>`,
		"fallback": "lucide-extended:columns-3-cog-filled",
	});
}

export default Component;
