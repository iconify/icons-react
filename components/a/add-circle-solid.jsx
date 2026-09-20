import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyvff_bvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lyvff_bvj"/>`,
		"fallback": "streamline:add-circle-solid",
	});
}

export default Component;
