import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nhw_tkbxm.css';
import '../../css/j/j8-lr2r-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="nhw_tkbxm"/><path class="j8-lr2r-e"/></g>`,
		"fallback": "codex:briefcase",
	});
}

export default Component;
