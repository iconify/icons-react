import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldmnugbgt.css';
import '../../css/a/aqgm4tbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldmnugbgt"/><path clip-rule="evenodd" class="aqgm4tbwp"/>`,
		"fallback": "cuida:arrow-up-outline",
	});
}

export default Component;
