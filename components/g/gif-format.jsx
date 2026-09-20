import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hesvm7i3z.css';
import '../../css/y/yzhwl80_f.css';
import '../../css/v/v11-2dbod.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hesvm7i3z"/><path class="yzhwl80_f"/><path class="v11-2dbod"/></g>`,
		"fallback": "streamline-color:gif-format",
	});
}

export default Component;
