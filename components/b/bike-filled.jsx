import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm73iyntv.css';
import '../../css/y/ywrez9dnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm73iyntv"/><path class="ywrez9dnk"/>`,
		"fallback": "lucide-extended:bike-filled",
	});
}

export default Component;
