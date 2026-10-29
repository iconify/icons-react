import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tcqe92r3b.css';
import '../../css/a/ayqoymtng.css';
import '../../css/h/hyiv-xb_h.css';
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
		"content": `<g class="d2kvgvbvc"><path class="tcqe92r3b"/><path class="ayqoymtng"/><path class="hyiv-xb_h"/><path class="qk9xa2v5m"/><path class="qu1k8b4di"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman-bob",
	});
}

export default Component;
