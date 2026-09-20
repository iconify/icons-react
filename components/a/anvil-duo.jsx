import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp50wybee.css';
import '../../css/k/k-141wb6l.css';
import '../../css/s/s4qo96blz.css';
import '../../css/i/i21fmlb7m.css';
import '../../css/j/j6i03sb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp50wybee"/><path class="k-141wb6l"/><path class="s4qo96blz"/><path class="i21fmlb7m"/><path class="j6i03sb9x"/></g>`,
		"fallback": "streamline-kameleon-color:anvil-duo",
	});
}

export default Component;
