import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/b/b8ix9hiaq.css';
import '../../css/a/aw1zvwb5g.css';
import '../../css/n/n3cjoe8np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="b8ix9hiaq"/><path class="aw1zvwb5g"/><path class="n3cjoe8np"/></g>`,
		"fallback": "solar:file-terminal-bold-duotone",
	});
}

export default Component;
