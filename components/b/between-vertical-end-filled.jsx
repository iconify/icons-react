import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykz2nk03s.css';
import '../../css/w/w4_yefglu.css';
import '../../css/a/ag06jb7os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykz2nk03s"/><rect class="w4_yefglu"/><rect class="ag06jb7os"/>`,
		"fallback": "boxicons:between-vertical-end-filled",
	});
}

export default Component;
