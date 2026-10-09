import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clpb2bbyt.css';
import '../../css/t/t5bungbfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clpb2bbyt"/><path class="t5bungbfg"/>`,
		"fallback": "energy-icons:fish-ladder-48",
	});
}

export default Component;
