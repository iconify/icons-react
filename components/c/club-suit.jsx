import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq_xn5bxe.css';
import '../../css/s/snp287xku.css';
import '../../css/o/obr8ke7yg.css';
import '../../css/h/h_tc_qcyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq_xn5bxe"/><path class="snp287xku"/><path class="obr8ke7yg"/><path class="h_tc_qcyt"/>`,
		"fallback": "streamline-emojis:club-suit",
	});
}

export default Component;
