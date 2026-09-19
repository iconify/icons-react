import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b60v-hp-d.css';
import '../../css/b/boovo_bvp.css';
import '../../css/t/thzp7l4oa.css';
import '../../css/o/onifibbst.css';
import '../../css/t/t1sx-abjs.css';
import '../../css/g/gz9t6bcgg.css';
import '../../css/a/a517neb4n.css';
import '../../css/k/kbuc3jwtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b60v-hp-d"/><path class="boovo_bvp"/><path class="thzp7l4oa"/><path class="onifibbst"/><g transform="translate(-135 -6.5)scale(1.02539)" class="t1sx-abjs"><circle class="gz9t6bcgg"/><circle class="a517neb4n"/><path class="kbuc3jwtr"/></g>`,
		"fallback": "flag:eh-1x1",
	});
}

export default Component;
