import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm3zlkn7f.css';
import '../../css/s/sz_qvhbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm3zlkn7f"/><path class="sz_qvhbcu"/>`,
		"fallback": "basil:folder-user-outline",
	});
}

export default Component;
