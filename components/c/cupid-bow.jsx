import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kfu17d37k.css';
import '../../css/o/o_av2xxzr.css';
import '../../css/b/b6ofq7b0p.css';
import '../../css/t/ta86zcbdo.css';
import '../../css/i/ij7sl9b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kfu17d37k wm-k"/><path class="o_av2xxzr wm-a"/><path class="b6ofq7b0p wm-k"/><path class="ta86zcbdo"/><path class="ij7sl9b9q"/></g>`,
		"fallback": "withicons-bauhaus:cupid-bow",
	});
}

export default Component;
