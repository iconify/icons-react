import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/q/qgo3qub9a.css';
import '../../css/l/lj93my_zy.css';
import '../../css/r/ryz6tf6qj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="qgo3qub9a"/><path class="lj93my_zy"/><path class="ryz6tf6qj"/>`,
		"fallback": "energy-icons:house-key-48-bold",
	});
}

export default Component;
