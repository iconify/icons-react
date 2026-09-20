import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc21hcbgh.css';
import '../../css/g/gis2ovb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc21hcbgh"/><path clip-rule="evenodd" class="gis2ovb6v"/>`,
		"fallback": "stash:browser",
	});
}

export default Component;
