import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbnuryord.css';
import '../../css/d/ddoez_smv.css';
import '../../css/z/z36fjojcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbnuryord"/><path class="ddoez_smv"/><path class="z36fjojcj"/>`,
		"fallback": "energy-icons:inspection-48",
	});
}

export default Component;
