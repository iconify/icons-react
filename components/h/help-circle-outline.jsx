import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr_xxwbkp.css';
import '../../css/d/dzrft4xru.css';
import '../../css/g/g47gadbou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr_xxwbkp"/><path class="dzrft4xru"/><circle class="g47gadbou"/>`,
		"fallback": "famicons:help-circle-outline",
	});
}

export default Component;
