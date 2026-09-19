import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_2l-mb5b.css';
import '../../css/b/b5_hbpb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_2l-mb5b"/><path class="b5_hbpb1l"/>`,
		"fallback": "boxicons:background-filled",
	});
}

export default Component;
