import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_uzqsbkp.css';
import '../../css/t/tspp8v30b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c_uzqsbkp secondary"/><path class="primary tspp8v30b"/></g>`,
		"fallback": "iconaut:flower-pot-duotone",
	});
}

export default Component;
