import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us4pzjbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us4pzjbzg"/>`,
		"fallback": "mingcute:archive-restore-line",
	});
}

export default Component;
