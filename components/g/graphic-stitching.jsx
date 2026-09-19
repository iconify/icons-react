import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpt0rl_0q.css';
import '../../css/f/f5v9m_b1p.css';
import '../../css/v/vsgapqbdt.css';
import '../../css/u/uyohax_qu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="f5v9m_b1p"/><path class="vsgapqbdt"/><path class="uyohax_qu"/></g>`,
		"fallback": "icon-park-outline:graphic-stitching",
	});
}

export default Component;
