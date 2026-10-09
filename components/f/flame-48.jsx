import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqe_kssen.css';
import '../../css/j/jl4dq47bj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqe_kssen"/><path class="jl4dq47bj"/>`,
		"fallback": "energy-icons:flame-48",
	});
}

export default Component;
