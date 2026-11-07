import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sownw2b9k.css';
import '../../css/e/e-elr2cua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sownw2b9k"/><path clip-rule="evenodd" class="e-elr2cua"/>`,
		"fallback": "solar:double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
