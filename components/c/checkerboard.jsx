import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t_7e9gkzo.css';
import '../../css/v/vqqp3qbtw.css';
import '../../css/i/ijsd5hbuc.css';
import '../../css/v/vluv2_bwy.css';
import '../../css/w/w05t45bdf.css';
import '../../css/j/jr5rdnccr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t_7e9gkzo"/><line x1="23" x2="44" y1="17" y2="17"/><line x1="4" x2="13" y1="17" y2="17"/><line x1="35" x2="44" y1="31" y2="31"/><line x1="6" x2="25" y1="31" y2="31"/><line x1="17" x2="17" y1="21" y2="44"/><path class="vqqp3qbtw"/><path class="ijsd5hbuc"/><path class="vluv2_bwy"/><path class="w05t45bdf"/><path class="jr5rdnccr"/></g>`,
		"fallback": "icon-park:checkerboard",
	});
}

export default Component;
