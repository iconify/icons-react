import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/w/w6r6sxrzo.css';
import '../../css/o/omlunobmw.css';
import '../../css/b/bhx3wd61g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="w6r6sxrzo"/><path class="omlunobmw"/><path class="bhx3wd61g"/></g>`,
		"fallback": "icon-park:code",
	});
}

export default Component;
