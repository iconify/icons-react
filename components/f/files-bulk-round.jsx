import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymxzlpbfu.css';
import '../../css/x/x1tr1zh4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ymxzlpbfu"/><path class="x1tr1zh4h"/></g>`,
		"fallback": "coolicons:files-bulk-round",
	});
}

export default Component;
