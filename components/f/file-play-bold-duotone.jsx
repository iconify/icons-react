import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/k/k56oj1bga.css';
import '../../css/w/wuoxx3bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path clip-rule="evenodd" class="k56oj1bga"/><path class="wuoxx3bjn"/></g>`,
		"fallback": "solar:file-play-bold-duotone",
	});
}

export default Component;
