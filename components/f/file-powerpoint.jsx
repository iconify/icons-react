import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecs7db2qm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecs7db2qm"/>`,
		"fallback": "fa-regular:file-powerpoint",
	});
}

export default Component;
