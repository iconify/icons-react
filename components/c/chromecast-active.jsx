import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/c5-cmyb3j.css';
import '../../css/u/ugzu9rb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="c5-cmyb3j"/><path clip-rule="evenodd" class="ugzu9rb9p"/></g>`,
		"fallback": "iconoir:chromecast-active",
	});
}

export default Component;
