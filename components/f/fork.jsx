import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/ncz2z7b1j.css';
import '../../css/g/gwra3bc3h.css';
import '../../css/v/vfkibrbfi.css';
import '../../css/p/pq22b_k3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ncz2z7b1j"/><path class="gwra3bc3h"/><path class="vfkibrbfi"/><path class="pq22b_k3h"/></g>`,
		"fallback": "icon-park:fork",
	});
}

export default Component;
