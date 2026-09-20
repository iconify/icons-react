import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/h/hwmbisf9i.css';
import '../../css/n/n9542da1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="hwmbisf9i"/><path class="n9542da1w"/></g>`,
		"fallback": "lets-icons:bug-duotone",
	});
}

export default Component;
