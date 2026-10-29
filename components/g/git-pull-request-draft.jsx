import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l6zl_acuc.css';
import '../../css/w/wu2t1faoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l6zl_acuc"/><path class="wu2t1faoq"/></g>`,
		"fallback": "withicons-bauhaus:git-pull-request-draft",
	});
}

export default Component;
