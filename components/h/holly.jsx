import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/we-rgv_eb.css';
import '../../css/e/ergi8db9w.css';
import '../../css/t/tjlpedbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="we-rgv_eb"/><path class="ergi8db9w wm-k"/><path class="tjlpedbiu wm-a"/></g>`,
		"fallback": "withicons-kawaii:holly",
	});
}

export default Component;
