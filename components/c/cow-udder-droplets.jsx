import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf73r1lpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf73r1lpz"/>`,
		"fallback": "lucide-lab:cow-udder-droplets",
	});
}

export default Component;
