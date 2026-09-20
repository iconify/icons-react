import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh7n6jp1r.css';
import '../../css/c/c3r_go6vi.css';
import '../../css/p/pf2zhnbir.css';
import '../../css/c/cly_fw55m.css';
import '../../css/w/w75jkzbxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh7n6jp1r"/><path class="c3r_go6vi"/><path class="pf2zhnbir"/><path class="cly_fw55m"/><path class="w75jkzbxd"/>`,
		"fallback": "selfhst:gmail",
	});
}

export default Component;
