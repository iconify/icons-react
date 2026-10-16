import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkipg-bnu.css';
import '../../css/e/etvxrubdo.css';
import '../../css/j/j_numcn-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkipg-bnu"/><path class="etvxrubdo"/><path class="j_numcn-q"/>`,
		"fallback": "energy-icons:enhanced-weathering-48",
	});
}

export default Component;
