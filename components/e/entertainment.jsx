import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p94f6-bxk.css';
import '../../css/c/clhd33euh.css';
import '../../css/e/e59rqodku.css';
import '../../css/j/jmvmbrxfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="p94f6-bxk"/><path class="clhd33euh"/><path class="e59rqodku"/><path class="jmvmbrxfl"/></g>`,
		"fallback": "icon-park:entertainment",
	});
}

export default Component;
