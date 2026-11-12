import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz190sbsc.css';
import '../../css/v/vv4e-qbeo.css';
import '../../css/n/nvzxc_b8q.css';
import '../../css/u/uk0r5dbhf.css';
import '../../css/f/f-06w7b8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz190sbsc"/><path class="vv4e-qbeo"/><path class="nvzxc_b8q"/><path class="uk0r5dbhf"/><path class="f-06w7b8a"/>`,
		"fallback": "selfhst:bichon-light",
	});
}

export default Component;
