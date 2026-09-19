import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgmg6gbzz.css';
import '../../css/t/tv9fvwn7g.css';
import '../../css/j/j2z-v9cxh.css';
import '../../css/h/hwsk9gqbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 35.193 5.322)" class="qgmg6gbzz"/><path class="tv9fvwn7g"/><path class="j2z-v9cxh"/><rect transform="rotate(30 33.268 12.34)" class="hwsk9gqbj"/></g>`,
		"fallback": "icon-park:electronic-pen",
	});
}

export default Component;
