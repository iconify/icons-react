import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/o/o13ity-9p.css';
import '../../css/t/tme5ik4hr.css';
import '../../css/n/n89ybzzhv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="o13ity-9p"/><path clip-rule="evenodd" class="tme5ik4hr"/><path class="n89ybzzhv"/></g>`,
		"fallback": "icon-park:adobe-photoshop",
	});
}

export default Component;
