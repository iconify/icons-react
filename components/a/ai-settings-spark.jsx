import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq9k7qcyb.css';
import '../../css/z/zkmn-3hyk.css';
import '../../css/n/nn8lriy3j.css';
import '../../css/a/a5deuq01m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq9k7qcyb"/><path class="zkmn-3hyk"/><path class="nn8lriy3j"/><path class="a5deuq01m"/></g>`,
		"fallback": "streamline-color:ai-settings-spark",
	});
}

export default Component;
