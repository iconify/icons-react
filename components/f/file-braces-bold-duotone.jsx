import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jav_zgbsf.css';
import '../../css/l/l3981gogh.css';
import '../../css/u/ubn_7xb7s.css';
import '../../css/o/oj6gwrmjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jav_zgbsf"/><path class="l3981gogh"/><path class="ubn_7xb7s"/><path clip-rule="evenodd" class="oj6gwrmjs"/>`,
		"fallback": "solar:file-braces-bold-duotone",
	});
}

export default Component;
