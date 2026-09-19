import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gosx51uge.css';
import '../../css/a/agp8z31zm.css';
import '../../css/g/g1c1xhbvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="gosx51uge"/><path class="agp8z31zm"/><path class="g1c1xhbvc"/></g>`,
		"fallback": "icon-park:connection-point-two",
	});
}

export default Component;
