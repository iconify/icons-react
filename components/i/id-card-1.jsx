import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kq9gesbhh.css';
import '../../css/s/stw43fbtj.css';
import '../../css/w/wspo6ub-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kq9gesbhh"/><path class="stw43fbtj"/><path class="wspo6ub-h"/></g>`,
		"fallback": "streamline-cyber:id-card-1",
	});
}

export default Component;
