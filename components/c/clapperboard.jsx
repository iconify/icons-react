import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp6fzabyy.css';
import '../../css/n/nph7vibnr.css';
import '../../css/x/xnq8w68sz.css';
import '../../css/g/grxh9gs-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp6fzabyy"/><path class="nph7vibnr"/><circle class="xnq8w68sz"/><path class="grxh9gs-s"/>`,
		"fallback": "flat-color-icons:clapperboard",
	});
}

export default Component;
