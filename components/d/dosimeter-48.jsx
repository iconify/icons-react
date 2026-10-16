import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qst8sacvr.css';
import '../../css/n/ncpk28ife.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qst8sacvr"/><path class="ncpk28ife"/>`,
		"fallback": "energy-icons:dosimeter-48",
	});
}

export default Component;
