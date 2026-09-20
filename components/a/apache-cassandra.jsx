import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbsvtbcxs.css';
import '../../css/r/raqx0nmsd.css';
import '../../css/a/aaaoe8b6g.css';
import '../../css/i/ii1y0ubpf.css';
import '../../css/e/ez443fbbf.css';
import '../../css/j/jer_9fuoi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbsvtbcxs"/><path class="raqx0nmsd"/><path class="aaaoe8b6g"/><path class="ii1y0ubpf"/><path class="ez443fbbf"/><path class="jer_9fuoi"/>`,
		"fallback": "selfhst:apache-cassandra",
	});
}

export default Component;
