import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/p/pb5j267yg.css';
import '../../css/l/lx8xq0b6l.css';
import '../../css/p/pktawwb9l.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq1irjb8q"><g class="ukm9jj2re"><path class="pb5j267yg"/><path class="lx8xq0b6l"/><path class="pktawwb9l"/></g></mask></defs><path mask="url(#SVGq1irjb8q)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:chat-plus-duotone-line",
	});
}

export default Component;
