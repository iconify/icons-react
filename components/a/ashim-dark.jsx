import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebr1bctr.css';
import '../../css/p/p1mbpccli.css';
import '../../css/e/e3l4mac6w.css';
import '../../css/i/il-pnhbun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iebr1bctr"/><path class="p1mbpccli"/><path class="e3l4mac6w"/><path class="il-pnhbun"/>`,
		"fallback": "selfhst:ashim-dark",
	});
}

export default Component;
