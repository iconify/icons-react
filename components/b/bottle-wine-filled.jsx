import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn3ycljxj.css';
import '../../css/l/lfs1rybvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn3ycljxj"/><path class="lfs1rybvz"/>`,
		"fallback": "lucide-extended:bottle-wine-filled",
	});
}

export default Component;
