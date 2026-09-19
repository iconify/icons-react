import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhj0lixiu.css';
import '../../css/i/i63lgvbjp.css';
import '../../css/z/z7bc25blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhj0lixiu"/><path class="i63lgvbjp"/><path class="z7bc25blt"/></g>`,
		"fallback": "iconamoon:file-remove-duotone",
	});
}

export default Component;
