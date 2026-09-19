import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn9v5wb5v.css';
import '../../css/i/i-7q7uo4q.css';
import '../../css/v/vxeuoi5gh.css';
import '../../css/w/wny4i065r.css';
import '../../css/j/jg72yy-aa.css';
import '../../css/q/qfbq_9bos.css';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';
import '../../css/y/ywdzupbgd.css';
import '../../css/p/p0dhopitp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn9v5wb5v"/><path class="i-7q7uo4q"/><path class="vxeuoi5gh"/><g class="wny4i065r"><circle class="jg72yy-aa"/><path class="qfbq_9bos"/></g><path class="goohnvfrd"/><path class="z8ck8jbnx"/><g class="wny4i065r"><circle class="ywdzupbgd"/><path class="p0dhopitp"/></g>`,
		"fallback": "flat-color-icons:audio-file",
	});
}

export default Component;
