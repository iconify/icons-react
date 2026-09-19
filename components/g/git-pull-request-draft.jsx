import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aiee32she.css';
import '../../css/s/sa8oq8bea.css';
import '../../css/n/ng521n2fi.css';
import '../../css/n/nmoouyb9r.css';
import '../../css/n/n5ujs4bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aiee32she"/><circle class="sa8oq8bea"/><circle class="ng521n2fi"/><circle class="nmoouyb9r"/><path class="n5ujs4bbf"/></g>`,
		"fallback": "hugeicons:git-pull-request-draft",
	});
}

export default Component;
