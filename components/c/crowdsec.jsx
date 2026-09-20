import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpqstnbkt.css';
import '../../css/j/jobm0_deg.css';
import '../../css/u/um_60vbsp.css';
import '../../css/k/k8kt187zo.css';
import '../../css/w/wyu3oubvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpqstnbkt"/><path class="jobm0_deg"/><path class="um_60vbsp"/><path class="k8kt187zo"/><path class="wyu3oubvu"/>`,
		"fallback": "selfhst:crowdsec",
	});
}

export default Component;
