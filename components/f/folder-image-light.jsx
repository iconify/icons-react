import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rnzbfibwd.css';
import '../../css/f/fd4n1j82x.css';
import '../../css/y/ygf737bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rnzbfibwd"/><path class="fd4n1j82x"/><path class="ygf737bqn"/></g>`,
		"fallback": "iconamoon:folder-image-light",
	});
}

export default Component;
