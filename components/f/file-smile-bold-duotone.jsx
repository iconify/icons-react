import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/a/aow2wbkcj.css';
import '../../css/a/a6o76erwn.css';
import '../../css/b/b54ougbzw.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="aow2wbkcj"/><path class="a6o76erwn"/><path class="b54ougbzw"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:file-smile-bold-duotone",
	});
}

export default Component;
