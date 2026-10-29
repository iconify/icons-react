import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znversx8x.css';
import '../../css/x/x4xm00rnt.css';
import '../../css/n/nc2ovs5_q.css';
import '../../css/a/a-8ulvb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a znversx8x"/><path class="wm-k x4xm00rnt"/><path class="nc2ovs5_q wm-k"/><path class="a-8ulvb8e wm-k"/>`,
		"fallback": "withicons-bauhaus:fuel",
	});
}

export default Component;
