import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smb428ckv.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smb428ckv"/>`,
		"fallback": "fa6-solid:0",
	});
}

export default Component;
