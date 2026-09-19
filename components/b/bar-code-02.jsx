import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md0vv3bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md0vv3bmx"/>`,
		"fallback": "hugeicons:bar-code-02",
	});
}

export default Component;
