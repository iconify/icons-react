import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azu-vgb0r.css';
import '../../css/l/lylvmeb0j.css';
import '../../css/r/rp7_rdbgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azu-vgb0r"/><path class="lylvmeb0j"/><path class="rp7_rdbgh"/>`,
		"fallback": "selfhst:chorizard-light",
	});
}

export default Component;
