import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x21ra5bou.css';
import '../../css/c/cdhxuqb1b.css';
import '../../css/r/r94vwub7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x21ra5bou"/><path class="cdhxuqb1b"/><path class="r94vwub7p"/>`,
		"fallback": "energy-icons:charger-slow-48",
	});
}

export default Component;
