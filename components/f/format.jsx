import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/n/nn9267b3z.css';
import '../../css/s/sv-ds5b4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="nn9267b3z"/><path class="sv-ds5b4v"/></g>`,
		"fallback": "icon-park-outline:format",
	});
}

export default Component;
