import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl4mpkbmq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl4mpkbmq"/>`,
		"fallback": "fa-regular:file-pdf",
	});
}

export default Component;
