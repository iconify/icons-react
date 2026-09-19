import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/s/sba0k3-2g.css';
import '../../css/i/iiid1177w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="sba0k3-2g"/><circle class="iiid1177w"/>`,
		"fallback": "catppuccin:folder-moonrepo-open",
	});
}

export default Component;
