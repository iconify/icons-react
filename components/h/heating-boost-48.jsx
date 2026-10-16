import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-obboe6z.css';
import '../../css/u/u2ghli_7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-obboe6z"/><path class="u2ghli_7a"/>`,
		"fallback": "energy-icons:heating-boost-48",
	});
}

export default Component;
