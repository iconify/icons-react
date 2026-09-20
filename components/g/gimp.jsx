import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmyx2i8eq.css';
import '../../css/i/idsj98b2h.css';
import '../../css/n/n7a4b3b0l.css';
import '../../css/g/gjd_agb4r.css';
import '../../css/w/wf5je7j4b.css';
import '../../css/r/rx7gey9co.css';
import '../../css/r/r6l3asbyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmyx2i8eq"/><path class="idsj98b2h"/><path class="n7a4b3b0l"/><circle class="gjd_agb4r"/><path class="wf5je7j4b"/><path class="rx7gey9co"/><path class="r6l3asbyg"/>`,
		"fallback": "selfhst:gimp",
	});
}

export default Component;
