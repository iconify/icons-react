import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5dqg8itc.css';
import '../../css/c/caam7zbpo.css';
import '../../css/r/rxph36bxz.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/q/qu1k8b4di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b5dqg8itc"/><path class="caam7zbpo"/><path class="rxph36bxz"/><path class="qk9xa2v5m"/><path class="qu1k8b4di"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man-afro",
	});
}

export default Component;
