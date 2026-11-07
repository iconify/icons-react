import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk7apdhpz.css';
import '../../css/f/fgrlfobbu.css';
import '../../css/d/d7jqjkbvm.css';
import '../../css/j/joaxcob9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk7apdhpz"/><path class="fgrlfobbu"/><path clip-rule="evenodd" class="d7jqjkbvm"/><path class="joaxcob9n"/>`,
		"fallback": "solar:command-bold-duotone",
	});
}

export default Component;
