import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loa2wvbos.css';
import '../../css/a/a2tuuobyg.css';
import '../../css/w/wv3plmbie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loa2wvbos"/><path class="a2tuuobyg"/><path class="wv3plmbie"/>`,
		"fallback": "energy-icons:cctv-20-bold",
	});
}

export default Component;
