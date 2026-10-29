import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2hayw1qi.css';
import '../../css/x/x9rgjn_aa.css';
import '../../css/n/nna-chrgg.css';
import '../../css/q/q9pkv2ksg.css';
import '../../css/c/c9f8_3bxa.css';
import '../../css/f/f8mc3dzfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k z2hayw1qi"/><path class="wm-k x9rgjn_aa"/><path class="nna-chrgg wm-k"/><path class="q9pkv2ksg wm-k"/><path class="c9f8_3bxa wm-shine"/><path class="f8mc3dzfp wm-a"/></g>`,
		"fallback": "withicons-anime:file-input",
	});
}

export default Component;
