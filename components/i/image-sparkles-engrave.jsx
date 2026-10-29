import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tek2khblr.css';
import '../../css/y/y2xhkpblq.css';
import '../../css/y/yia3ybcxs.css';
import '../../css/q/qxvwfm8fu.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';
import '../../css/q/qdzstlt9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tek2khblr wm-k"/><path class="wm-a y2xhkpblq"/><path class="wm-s yia3ybcxs"/><path class="qxvwfm8fu wm-shadow"/><path class="ain1tnbxt wm-k"/><path class="sy7kpcbuo wm-a"/><path class="qdzstlt9t wm-s"/></g>`,
		"fallback": "withicons:image-sparkles-engrave",
	});
}

export default Component;
