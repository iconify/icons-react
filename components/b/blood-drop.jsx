import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/abv16i9-e.css';
import '../../css/c/cl8f37snz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="abv16i9-e"/><path class="cl8f37snz"/></g>`,
		"fallback": "streamline-cyber:blood-drop",
	});
}

export default Component;
