import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/d/dkt9-8bha.css';
import '../../css/z/z9ukjjbxk.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="dkt9-8bha"/><path class="z9ukjjbxk"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-text-bold-duotone",
	});
}

export default Component;
