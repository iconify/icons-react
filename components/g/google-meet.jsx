import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w17pajbqs.css';
import '../../css/u/uq3m4zbnu.css';
import '../../css/r/r-v384qxp.css';
import '../../css/x/xhxgmq5sf.css';
import '../../css/u/urcxkybwc.css';
import '../../css/n/ndn6zujjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w17pajbqs"/><path class="uq3m4zbnu"/><path class="r-v384qxp"/><path class="xhxgmq5sf"/><path class="urcxkybwc"/><path class="ndn6zujjx"/>`,
		"fallback": "selfhst:google-meet",
	});
}

export default Component;
