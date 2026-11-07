import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/v/v0889sbtt.css';
import '../../css/n/nyd8i_t9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="v0889sbtt"/><path class="nyd8i_t9f"/>`,
		"fallback": "solar:file-check-bold-duotone",
	});
}

export default Component;
