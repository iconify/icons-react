import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd27rubxa.css';
import '../../css/l/la9b33n7c.css';
import '../../css/t/tedl8eurm.css';
import '../../css/f/fuz22qbbg.css';
import '../../css/z/z6vsm4b4q.css';
import '../../css/w/wnv92qbyl.css';
import '../../css/i/in-41yb7j.css';
import '../../css/g/g9s8gdcde.css';
import '../../css/t/ts5cfzukm.css';
import '../../css/j/jmwc4wbvu.css';
import '../../css/o/onth2gtcu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd27rubxa"/><path class="la9b33n7c"/><path class="tedl8eurm"/><path class="fuz22qbbg"/><path class="z6vsm4b4q"/><path class="wnv92qbyl"/><path class="in-41yb7j"/><path class="g9s8gdcde"/><circle class="ts5cfzukm"/><path class="jmwc4wbvu"/><path class="onth2gtcu"/>`,
		"fallback": "devicon:apacheairflow-wordmark",
	});
}

export default Component;
