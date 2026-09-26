import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/s/s6cmawfya.css';
import '../../css/e/era6xabek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path clip-rule="evenodd" class="s6cmawfya"/><path class="era6xabek"/></g>`,
		"fallback": "solar:file-lock-bold-duotone",
	});
}

export default Component;
