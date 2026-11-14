import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kievrdbdp.css';
import '../../css/n/nstbe3bzr.css';
import '../../css/u/uln8bqb4e.css';
import '../../css/z/z0qdkwbtn.css';
import '../../css/i/ip9tdh1yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kievrdbdp"/><path class="nstbe3bzr"/><path class="uln8bqb4e"/><path class="z0qdkwbtn"/><path class="ip9tdh1yx"/>`,
		"fallback": "selfhst:haproxy",
	});
}

export default Component;
