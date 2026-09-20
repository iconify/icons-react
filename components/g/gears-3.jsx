import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwvk58bob.css';
import '../../css/d/dnd1o1bkt.css';
import '../../css/b/bh3yo7b6q.css';
import '../../css/w/w009iebcq.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwvk58bob"/><path class="dnd1o1bkt"/><path clip-rule="evenodd" class="bh3yo7b6q"/><path clip-rule="evenodd" class="w009iebcq"/>`,
		"fallback": "lineicons:gears-3",
	});
}

export default Component;
