import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/m/me55noe0w.css';
import '../../css/w/wz597j78j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path clip-rule="evenodd" class="me55noe0w"/><path class="wz597j78j"/>`,
		"fallback": "solar:file-lock-bold-duotone",
	});
}

export default Component;
