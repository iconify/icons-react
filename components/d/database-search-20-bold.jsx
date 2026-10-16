import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stnu0vheg.css';
import '../../css/z/z-ebmzb8v.css';
import '../../css/x/xxlvr9b9g.css';
import '../../css/e/e8_sa6eqg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stnu0vheg"/><path class="z-ebmzb8v"/><path class="xxlvr9b9g"/><path class="e8_sa6eqg"/>`,
		"fallback": "energy-icons:database-search-20-bold",
	});
}

export default Component;
