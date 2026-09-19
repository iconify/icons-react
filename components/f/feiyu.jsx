import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/owq3x6ntk.css';
import '../../css/s/smmsgrb2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="owq3x6ntk"/><path class="smmsgrb2g"/></g>`,
		"fallback": "icon-park-outline:feiyu",
	});
}

export default Component;
