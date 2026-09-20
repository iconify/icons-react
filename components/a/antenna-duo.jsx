import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp50wybee.css';
import '../../css/z/z_celjb6g.css';
import '../../css/d/d5rqghbje.css';
import '../../css/x/x6jo4obks.css';
import '../../css/u/u2hk7_b-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp50wybee"/><path class="z_celjb6g"/><path class="d5rqghbje"/><path class="x6jo4obks"/><path class="u2hk7_b-r"/></g>`,
		"fallback": "streamline-kameleon-color:antenna-duo",
	});
}

export default Component;
