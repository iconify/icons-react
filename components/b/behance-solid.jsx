import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw-3vdb_m.css';
import '../../css/h/hwffqcn9l.css';
import '../../css/q/q4zcn6s8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yw-3vdb_m"/><path class="hwffqcn9l"/><path clip-rule="evenodd" class="q4zcn6s8b"/>`,
		"fallback": "basil:behance-solid",
	});
}

export default Component;
