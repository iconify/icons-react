import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g83jubcwx.css';
import '../../css/p/plpx6bh0t.css';
import '../../css/b/bs59tnbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g83jubcwx"/><path class="plpx6bh0t"/><path clip-rule="evenodd" class="bs59tnbwx"/></g>`,
		"fallback": "solar:gamepad-old-outline",
	});
}

export default Component;
