import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w3l99hu8u.css';
import '../../css/x/x4ahrcbha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="w3l99hu8u"/><path class="x4ahrcbha"/></g>`,
		"fallback": "icon-park-outline:add-two",
	});
}

export default Component;
