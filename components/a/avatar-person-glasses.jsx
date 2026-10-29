import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o-ebpv9hq.css';
import '../../css/c/cqdtdnnxy.css';
import '../../css/r/rgqlbhblt.css';
import '../../css/s/spi-7emnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o-ebpv9hq"/><path class="cqdtdnnxy"/><path class="rgqlbhblt wm-a"/><path class="spi-7emnl wm-a"/></g>`,
		"fallback": "withicons:avatar-person-glasses",
	});
}

export default Component;
