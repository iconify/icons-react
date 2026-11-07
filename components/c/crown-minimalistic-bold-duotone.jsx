import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8nox1bbt.css';
import '../../css/o/ouxb72b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8nox1bbt"/><path class="ouxb72b3s"/>`,
		"fallback": "solar:crown-minimalistic-bold-duotone",
	});
}

export default Component;
