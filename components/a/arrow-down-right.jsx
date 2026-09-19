import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2iitdbys.css';
import '../../css/t/tkiz4rbld.css';
import '../../css/s/s2j1gkbik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2iitdbys"/><path class="tkiz4rbld"/><path class="s2j1gkbik"/></g>`,
		"fallback": "pepicons:arrow-down-right",
	});
}

export default Component;
