import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go41ypbnd.css';
import '../../css/q/quv6-_b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go41ypbnd"/><path class="quv6-_b5d"/>`,
		"fallback": "tdesign:file-add-filled",
	});
}

export default Component;
