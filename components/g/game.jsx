import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ehssdsxzo.css';
import '../../css/p/plakrxbhx.css';
import '../../css/a/ahdaw7x5b.css';
import '../../css/z/z7e_plawd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ehssdsxzo"/><path class="plakrxbhx"/><path class="ahdaw7x5b"/><path class="z7e_plawd"/></g>`,
		"fallback": "icon-park:game",
	});
}

export default Component;
