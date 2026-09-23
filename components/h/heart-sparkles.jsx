import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0dfs-b6d.css';
import '../../css/j/jbs8u3u_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0dfs-b6d"/><path class="jbs8u3u_o"/></g>`,
		"fallback": "keyline-icons:heart-sparkles",
	});
}

export default Component;
