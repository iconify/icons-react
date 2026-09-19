import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmevdnb3h.css';
import '../../css/b/bw323sqaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmevdnb3h"/><path class="bw323sqaj"/>`,
		"fallback": "boxicons:city",
	});
}

export default Component;
