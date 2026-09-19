import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mphhq674n.css';
import '../../css/b/b97upvbku.css';
import '../../css/m/mfkyh3b3q.css';
import '../../css/f/f5ly6slcz.css';
import '../../css/i/izlyx2k0g.css';
import '../../css/w/wf-bqibbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mphhq674n"/><path class="b97upvbku"/><rect class="mfkyh3b3q"/><path class="f5ly6slcz"/><circle class="izlyx2k0g"/><circle class="wf-bqibbs"/></g>`,
		"fallback": "icon-park:hamburger-one",
	});
}

export default Component;
