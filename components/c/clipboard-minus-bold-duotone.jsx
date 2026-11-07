import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e67e0wblf.css';
import '../../css/c/c4946-17v.css';
import '../../css/m/mo43we00a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e67e0wblf"/><path class="c4946-17v"/><path class="mo43we00a"/>`,
		"fallback": "solar:clipboard-minus-bold-duotone",
	});
}

export default Component;
