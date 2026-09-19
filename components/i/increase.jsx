import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p2qes6yjx.css';
import '../../css/z/zwzneibzu.css';
import '../../css/c/c85xlhb2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="p2qes6yjx"/><path class="zwzneibzu"/><path class="c85xlhb2g"/></g>`,
		"fallback": "icon-park-outline:increase",
	});
}

export default Component;
