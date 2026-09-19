import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1yx7eixm.css';
import '../../css/w/wcezl0bkc.css';
import '../../css/p/pn48gtbgw.css';
import '../../css/w/wiuhzdagt.css';
import '../../css/u/uj0e2ibws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p1yx7eixm"><path class="wcezl0bkc"/><circle class="pn48gtbgw"/><circle class="wiuhzdagt"/><circle class="uj0e2ibws"/></g>`,
		"fallback": "icon-park-solid:crown-three",
	});
}

export default Component;
