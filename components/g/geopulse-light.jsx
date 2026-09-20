import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb3fmqb9r.css';
import '../../css/g/g03kqebpl.css';
import '../../css/o/o-m9f6foy.css';
import '../../css/a/aq5nklx-g.css';
import '../../css/t/tmsmu8bek.css';
import '../../css/c/c-rmwybji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb3fmqb9r"/><path class="g03kqebpl"/><path class="o-m9f6foy"/><circle transform="rotate(-80.781 256.004 228.196)" class="aq5nklx-g"/><path class="tmsmu8bek"/><path class="c-rmwybji"/>`,
		"fallback": "selfhst:geopulse-light",
	});
}

export default Component;
