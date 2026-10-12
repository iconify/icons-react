import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_gnfz4mq.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/v/vhpl0i1fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_gnfz4mq"/><path class="fnqp5ja6e"/><path class="vhpl0i1fo"/></g>`,
		"fallback": "andrsrxn:brain",
	});
}

export default Component;
