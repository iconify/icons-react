import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il86k8d2z.css';
import '../../css/x/x9t2-ybif.css';
import '../../css/t/t3hgv-bmt.css';
import '../../css/r/rl86ssbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il86k8d2z"/><path class="x9t2-ybif"/><path class="t3hgv-bmt"/><path clip-rule="evenodd" class="rl86ssbkj"/>`,
		"fallback": "solar:bomb-emoji-outline",
	});
}

export default Component;
