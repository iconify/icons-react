import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/w/wqenwibkw.css';
import '../../css/c/cj_ng38-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="wqenwibkw"/><path class="cj_ng38-v"/>`,
		"fallback": "energy-icons:house-search-48-bold",
	});
}

export default Component;
