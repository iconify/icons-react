import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp8cnibtf.css';
import '../../css/g/g95h_vbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mp8cnibtf"/><path class="g95h_vbdc"/>`,
		"fallback": "solar:arrow-right-up-bold-duotone",
	});
}

export default Component;
