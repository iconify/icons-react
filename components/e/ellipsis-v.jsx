import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty_ooxbvp.css';
import '../../css/t/tof83qbtg.css';
import '../../css/k/kgj1lsauv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ty_ooxbvp"/><circle class="tof83qbtg"/><circle class="kgj1lsauv"/>`,
		"fallback": "prime:ellipsis-v",
	});
}

export default Component;
