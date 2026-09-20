import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
import '../../css/k/k9xu8tbyg.css';
import '../../css/j/jcs05xofn.css';
import '../../css/l/la3iaobmb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k9pq-abme"><path class="k9xu8tbyg"/><path class="jcs05xofn"/></g><path class="la3iaobmb"/>`,
		"fallback": "openmoji:heart-hands-medium-skin-tone",
	});
}

export default Component;
