import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ouhtb3r.css';
import '../../css/e/eh026icaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q3ouhtb3r"/><path class="eh026icaj"/>`,
		"fallback": "famicons:basketball-outline",
	});
}

export default Component;
