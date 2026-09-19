import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/s/s-ptppb3j.css';
import '../../css/e/e6jd5wfjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="s-ptppb3j"/><path class="e6jd5wfjf"/></g>`,
		"fallback": "icon-park:drop-shadow-down",
	});
}

export default Component;
