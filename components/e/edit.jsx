import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3rjs_b4w.css';
import '../../css/l/lwfktibfz.css';
import '../../css/z/zga4ssbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3rjs_b4w"/><path clip-rule="evenodd" class="lwfktibfz"/><path class="zga4ssbgw"/></g>`,
		"fallback": "tdesign:edit",
	});
}

export default Component;
