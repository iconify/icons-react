import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/o/opdzqabnx.css';
import '../../css/l/lpmjdrl6q.css';
import '../../css/v/va6rngboh.css';
import '../../css/e/en2emgbag.css';
import '../../css/d/ddkf6wgvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="r8cyu3bwz"/><path class="opdzqabnx"/><path class="lpmjdrl6q"/><path class="va6rngboh"/><path class="en2emgbag"/><path class="ddkf6wgvb"/></g>`,
		"fallback": "icon-park:floor-tile",
	});
}

export default Component;
