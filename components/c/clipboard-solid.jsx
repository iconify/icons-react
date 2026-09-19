import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoe62lluo.css';
import '../../css/u/uy_7ftb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aoe62lluo"/><path class="uy_7ftb-p"/>`,
		"fallback": "basil:clipboard-solid",
	});
}

export default Component;
