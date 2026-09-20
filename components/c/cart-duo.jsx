import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-_rugwzf.css';
import '../../css/e/ebb2ojxhs.css';
import '../../css/c/cj0vjrbgw.css';
import '../../css/n/n1tl19b-d.css';
import '../../css/t/t-mywx3id.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-_rugwzf"/><path class="ebb2ojxhs"/><path class="cj0vjrbgw"/><path class="n1tl19b-d"/><path class="t-mywx3id"/></g>`,
		"fallback": "streamline-kameleon-color:cart-duo",
	});
}

export default Component;
