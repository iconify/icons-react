import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx3q0nbmz.css';
import '../../css/e/e4e471wzp.css';
import '../../css/e/eziplt3ei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kx3q0nbmz"/><path class="e4e471wzp"/><path class="eziplt3ei"/>`,
		"fallback": "carbon:hole-filling-cursor",
	});
}

export default Component;
