import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihnk3lbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihnk3lbos"/>`,
		"fallback": "lucide:gavel",
	});
}

export default Component;
