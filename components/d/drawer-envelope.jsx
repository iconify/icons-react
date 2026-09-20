import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vz07rfb4o.css';
import '../../css/f/fnitv3b8i.css';
import '../../css/x/xh1kfyb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vz07rfb4o"/><path class="fnitv3b8i"/><path class="xh1kfyb5j"/></g>`,
		"fallback": "streamline-freehand:drawer-envelope",
	});
}

export default Component;
