import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiwl87o0z.css';
import '../../css/t/tuc29nb8n.css';
import '../../css/c/ci3zysb2d.css';
import '../../css/n/news1hu4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiwl87o0z wm-k"/><path class="tuc29nb8n wm-k"/><path class="ci3zysb2d wm-a"/><path class="news1hu4g wm-a"/>`,
		"fallback": "withicons-bauhaus:external-link",
	});
}

export default Component;
