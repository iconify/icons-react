import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/i/ivf-we.css';
import '../../css/i/ie016v.css';
import '../../css/w/wd_51m.css';
import '../../css/b/botfzx.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-tcc6vx.css';
import '../../css/d/d-67r94s.css';
import '../../css/t/tr-g4nb9z.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUrXXWbhE"><path class="g26hbu ivf-we"/><path class="g26hbu ie016v"/><circle class="wd_51m"/></mask></defs><path mask="url(#SVGUrXXWbhE)" class="botfzx"/>`,
		"fallback": "line-md:compass-twotone",
	});
}

export default Component;
