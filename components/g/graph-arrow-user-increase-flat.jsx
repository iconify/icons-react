import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbj7qfjfp.css';
import '../../css/w/wu-b2vlft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbj7qfjfp"/><path clip-rule="evenodd" class="wu-b2vlft"/></g>`,
		"fallback": "streamline-plump-color:graph-arrow-user-increase-flat",
	});
}

export default Component;
