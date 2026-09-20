import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ycedndbee.css';
import '../../css/a/ahnb0mb5v.css';
import '../../css/o/om9vhvbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ycedndbee"/><path class="ahnb0mb5v"/><path class="om9vhvbih"/></g>`,
		"fallback": "streamline-freehand:amusement-park-castle",
	});
}

export default Component;
