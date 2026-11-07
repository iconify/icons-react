import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqyg7kbpb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/dc7hcta0y.css';
import '../../css/a/axzdh2blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xqyg7kbpb"/><g class="xtpeb-edw"><path class="dc7hcta0y"/><path class="axzdh2blw"/></g>`,
		"fallback": "solar:closet-bold-duotone",
	});
}

export default Component;
