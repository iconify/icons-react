import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/n/nw-f-lb0x.css';
import '../../css/t/t_p41ydtf.css';
import '../../css/a/advo7kb4g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="nw-f-lb0x"/><path class="t_p41ydtf"/><path class="advo7kb4g"/>`,
		"fallback": "ant-design:control-twotone",
	});
}

export default Component;
