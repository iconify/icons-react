import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y24yad2xd.css';
import '../../css/x/x-9xzubdm.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y24yad2xd"/><path clip-rule="evenodd" class="x-9xzubdm"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:dizzy2x-outline",
	});
}

export default Component;
