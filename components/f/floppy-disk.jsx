import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/grkz9wbom.css';
import '../../css/d/dl2t0oowd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="grkz9wbom"/><path class="dl2t0oowd"/></g>`,
		"fallback": "streamline-sharp:floppy-disk",
	});
}

export default Component;
