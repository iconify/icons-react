import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lozn7k14b.css';
import '../../css/c/cn55zc5yt.css';
import '../../css/w/wt6hebnha.css';
import '../../css/k/k8izljbyu.css';
import '../../css/s/sn1x08b6h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lozn7k14b"/><circle transform="matrix(-1 0 0 1 36 36)" class="cn55zc5yt"/><path class="wt6hebnha"/><circle class="k8izljbyu"/><circle class="sn1x08b6h"/>`,
		"fallback": "openmoji:fisheye",
	});
}

export default Component;
