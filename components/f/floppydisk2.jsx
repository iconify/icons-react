import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3qqrn2_d.css';
import '../../css/s/s7ccnp_vi.css';
import '../../css/r/rvkvl5b8b.css';
import '../../css/k/kvp5a_bkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3qqrn2_d"/><path class="s7ccnp_vi"/><path class="rvkvl5b8b"/><path class="kvp5a_bkt"/>`,
		"fallback": "fxemoji:floppydisk2",
	});
}

export default Component;
