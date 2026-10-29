import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sx2o51k2m.css';
import '../../css/d/dt-dc1j3v.css';
import '../../css/m/m_6pf-bvu.css';
import '../../css/v/vyzg3stsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sx2o51k2m wm-deco"/><path class="dt-dc1j3v wm-deco"/><path class="m_6pf-bvu wm-k"/><path class="vyzg3stsl wm-k"/></g>`,
		"fallback": "withicons:blocks-blueprint",
	});
}

export default Component;
