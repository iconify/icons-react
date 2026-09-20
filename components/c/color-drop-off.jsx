import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmf64gbbe.css';
import '../../css/f/f-3byccfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pmf64gbbe"/><path class="f-3byccfr"/>`,
		"fallback": "streamline-freehand:color-drop-off",
	});
}

export default Component;
