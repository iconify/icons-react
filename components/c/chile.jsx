import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-ao8x7sy.css';
import '../../css/r/r9m45djyc.css';
import '../../css/t/tlm5y69ci.css';
import '../../css/s/sc_6ohbrm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-ao8x7sy"/><path class="r9m45djyc"/><path class="tlm5y69ci"/><path class="sc_6ohbrm"/>`,
		"fallback": "tabler-flags:chile",
	});
}

export default Component;
