import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcgtjcb0f.css';
import '../../css/f/fmoi5vldd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcgtjcb0f"/><path class="fmoi5vldd"/>`,
		"fallback": "energy-icons:garden-bench-20-bold",
	});
}

export default Component;
