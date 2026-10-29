import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kgpqr0jik.css';
import '../../css/t/tn--5psox.css';
import '../../css/s/sfpzz6dun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kgpqr0jik"/><path class="tn--5psox"/><path class="sfpzz6dun"/></g>`,
		"fallback": "withicons-bauhaus:gingerbread-man",
	});
}

export default Component;
