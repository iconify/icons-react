import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk_o3uory.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mk_o3uory"/>`,
		"fallback": "reicon:arrow-right",
	});
}

export default Component;
