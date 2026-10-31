import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9cl-boot.css';
import '../../css/v/v4iotl68y.css';
import '../../css/t/t2w8mls_d.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9cl-boot"/><path class="v4iotl68y"/><path class="t2w8mls_d"/>`,
		"fallback": "tabler-flags:france",
	});
}

export default Component;
