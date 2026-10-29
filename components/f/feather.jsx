import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ytnx4gb2o.css';
import '../../css/c/ctowedb1g.css';
import '../../css/q/qp8t70b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ytnx4gb2o"/><path class="ctowedb1g"/><path class="qp8t70b3n"/></g>`,
		"fallback": "withicons-bauhaus:feather",
	});
}

export default Component;
