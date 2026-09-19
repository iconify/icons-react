import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/s/skxbyd0je.css';
import '../../css/x/xwtx6kbdr.css';
import '../../css/v/vpeh0xlmp.css';
import '../../css/y/y4xeitprp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="skxbyd0je"/><path class="xwtx6kbdr"/><path class="vpeh0xlmp"/><path class="y4xeitprp"/></g>`,
		"fallback": "icon-park:hot-pot-one",
	});
}

export default Component;
