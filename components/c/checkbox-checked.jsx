import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8tv-ebop.css';
import '../../css/x/xvqdfg4fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8tv-ebop"/><path class="xvqdfg4fc"/>`,
		"fallback": "boxicons:checkbox-checked",
	});
}

export default Component;
