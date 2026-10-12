import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv8c1bcfz.css';
import '../../css/w/wvb1r7csl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv8c1bcfz"/><path clip-rule="evenodd" class="wvb1r7csl"/>`,
		"fallback": "lucide-extended:crop-filled",
	});
}

export default Component;
