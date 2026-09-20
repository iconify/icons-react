import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh6n15bwy.css';
import '../../css/u/umdrjybhb.css';
import '../../css/b/bw_zhbbpx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh6n15bwy"/><path class="umdrjybhb"/><path class="bw_zhbbpx"/>`,
		"fallback": "openmoji:black-medium-small-square",
	});
}

export default Component;
