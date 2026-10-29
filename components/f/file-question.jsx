import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mjrcyhbre.css';
import '../../css/n/nk83n3bbi.css';
import '../../css/e/esa1d30xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mjrcyhbre"/><path class="nk83n3bbi"/><path class="esa1d30xi"/></g>`,
		"fallback": "withicons-bauhaus:file-question",
	});
}

export default Component;
