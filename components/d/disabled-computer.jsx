import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dpwho_k6y.css';
import '../../css/m/m_463rebt.css';
import '../../css/d/dwm4owi0d.css';
import '../../css/k/k6bkybbdw.css';
import '../../css/b/bdaloybdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="dpwho_k6y"/><path class="m_463rebt"/><circle class="dwm4owi0d"/><path class="k6bkybbdw"/><path class="bdaloybdj"/></g>`,
		"fallback": "icon-park:disabled-computer",
	});
}

export default Component;
