import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9cwwxbhw.css';
import '../../css/z/zf7k3pl9o.css';
import '../../css/b/b1645np_z.css';
import '../../css/m/m_ps-sb_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9cwwxbhw"/><path class="zf7k3pl9o"/><path class="b1645np_z"/><path class="m_ps-sb_m"/>`,
		"fallback": "selfhst:adventurelog",
	});
}

export default Component;
