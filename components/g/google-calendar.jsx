import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi8egtbjg.css';
import '../../css/q/q4g21ubem.css';
import '../../css/t/twup1abcd.css';
import '../../css/z/zltseq6ff.css';
import '../../css/d/d510jpxfw.css';
import '../../css/s/s07ahvbme.css';
import '../../css/d/dzm-v6dtc.css';
import '../../css/d/dapsa2bpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi8egtbjg"/><path class="q4g21ubem"/><path class="twup1abcd"/><path class="zltseq6ff"/><path class="d510jpxfw"/><path class="s07ahvbme"/><path class="dzm-v6dtc"/><path class="dapsa2bpt"/>`,
		"fallback": "selfhst:google-calendar",
	});
}

export default Component;
