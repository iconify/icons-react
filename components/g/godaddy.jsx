import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz4_77bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz4_77bbf"/>`,
		"fallback": "thesvg:godaddy",
	});
}

export default Component;
