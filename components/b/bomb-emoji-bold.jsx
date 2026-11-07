import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl-jarb6g.css';
import '../../css/c/cge_0eb5m.css';
import '../../css/d/db1p10rux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl-jarb6g"/><path clip-rule="evenodd" class="cge_0eb5m"/><path class="db1p10rux"/>`,
		"fallback": "solar:bomb-emoji-bold",
	});
}

export default Component;
