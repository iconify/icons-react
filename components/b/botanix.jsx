import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he_rybccd.css';
import '../../css/r/rvl2dhb2g.css';
import '../../css/c/co_1e37mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he_rybccd"/><path clip-rule="evenodd" class="rvl2dhb2g"/><path class="co_1e37mo"/>`,
		"fallback": "token:botanix",
	});
}

export default Component;
