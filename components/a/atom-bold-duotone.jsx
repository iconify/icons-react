import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vack09bmc.css';
import '../../css/z/zno_he9df.css';
import '../../css/m/mxe9l_zuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vack09bmc"/><path class="zno_he9df"/><path class="mxe9l_zuc"/>`,
		"fallback": "solar:atom-bold-duotone",
	});
}

export default Component;
