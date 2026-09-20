import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/l85b475qg.css';
import '../../css/a/apqxg2b3t.css';
import '../../css/k/k-nql8bba.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="l85b475qg"/><path class="apqxg2b3t"/><path clip-rule="evenodd" class="k-nql8bba"/></g>`,
		"fallback": "skill-icons:gherkin-light",
	});
}

export default Component;
