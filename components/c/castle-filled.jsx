import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz3n_jqgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz3n_jqgs"/>`,
		"fallback": "reicon:castle-filled",
	});
}

export default Component;
