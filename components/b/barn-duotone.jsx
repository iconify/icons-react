import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4xcodbxl.css';
import '../../css/x/xsfik-bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4xcodbxl"/><path class="xsfik-bys"/>`,
		"fallback": "si:barn-duotone",
	});
}

export default Component;
