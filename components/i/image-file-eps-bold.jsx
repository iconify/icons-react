import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d08wqdb5c.css';
import '../../css/s/sc9v9pb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d08wqdb5c"/><path class="sc9v9pb-o"/>`,
		"fallback": "streamline-ultimate:image-file-eps-bold",
	});
}

export default Component;
