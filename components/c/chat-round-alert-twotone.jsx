import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/nk836x.css';
import '../../css/y/ydovum.css';
import '../../css/b/b9qm4w.css';
import '../../css/t/t11kpj.css';
import '../../css/y/y4wbml.css';
import '../../css/i/ixkhpy.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew nk836x ydovum"/><path class="b9qm4w ydovum"/><path class="iw1iew t11kpj y4wbml"/><path class="iw1iew ixkhpy y4wbml"/>`,
		"fallback": "line-md:chat-round-alert-twotone",
	});
}

export default Component;
