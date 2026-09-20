import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wugjpkkox.css';
import '../../css/r/rxr0pn5gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wugjpkkox"/><path clip-rule="evenodd" class="rxr0pn5gx"/></g>`,
		"fallback": "streamline-sharp-color:input-box-flat",
	});
}

export default Component;
