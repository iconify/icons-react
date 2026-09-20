import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/p/p29sv8bvt.css';
import '../../css/l/lv_notbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="p29sv8bvt"/><path class="lv_notbxa"/></g>`,
		"fallback": "tabler:database-exclamation",
	});
}

export default Component;
