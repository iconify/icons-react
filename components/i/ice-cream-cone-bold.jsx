import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr7tf6sse.css';
import '../../css/t/tf3fnbb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr7tf6sse"/><path class="tf3fnbb4q"/>`,
		"fallback": "streamline-ultimate:ice-cream-cone-bold",
	});
}

export default Component;
