import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue5dmkb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue5dmkb5g"/>`,
		"fallback": "hugeicons:file-add",
	});
}

export default Component;
