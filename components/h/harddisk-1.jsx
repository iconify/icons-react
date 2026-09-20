import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n5g9r554c.css';
import '../../css/q/qo7pm-zuq.css';
import '../../css/o/of0i5gpge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="n5g9r554c"/><path class="qo7pm-zuq"/><path class="of0i5gpge"/></g>`,
		"fallback": "streamline-cyber:harddisk-1",
	});
}

export default Component;
