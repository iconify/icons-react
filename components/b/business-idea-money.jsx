import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/c7_5kkaag.css';
import '../../css/w/wbjetmbvh.css';
import '../../css/v/va8mohqrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="c7_5kkaag"/><path class="wbjetmbvh"/><path class="va8mohqrc"/></g>`,
		"fallback": "streamline-sharp-color:business-idea-money",
	});
}

export default Component;
