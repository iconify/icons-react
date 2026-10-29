import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bmv496bxy.css';
import '../../css/f/f2m_174tj.css';
import '../../css/p/ps_8m_qsd.css';
import '../../css/y/ynhs1nw0j.css';
import '../../css/e/epi1jybiv.css';
import '../../css/d/dxpgpjkkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bmv496bxy wm-deco"/><path class="f2m_174tj wm-deco"/><path class="ps_8m_qsd wm-deco"/><path class="wm-k ynhs1nw0j"/><path class="epi1jybiv wm-a"/><circle class="dxpgpjkkh wm-a"/></g>`,
		"fallback": "withicons:firecracker-blueprint",
	});
}

export default Component;
