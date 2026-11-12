import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k77157k9j.css';
import '../../css/i/idhse7v6j.css';
import '../../css/u/u-yc98b4d.css';
import '../../css/g/gko-hiyzu.css';
import '../../css/n/nv0o7acvk.css';
import '../../css/l/l6etxkbfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k77157k9j"/><circle class="idhse7v6j"/><path class="u-yc98b4d"/><path class="gko-hiyzu"/><path class="nv0o7acvk"/><circle class="l6etxkbfp"/>`,
		"fallback": "selfhst:capacitarr-dark",
	});
}

export default Component;
