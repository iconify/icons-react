import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/z/zxfgzy9hk.css';
import '../../css/s/s0vg7idxu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFes5IeWL"><g class="aql7dnt-u"><path class="f2ykp2y6k"/><path class="zxfgzy9hk"/><path class="s0vg7idxu"/></g></mask></defs><path mask="url(#SVGFes5IeWL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:double-bed",
	});
}

export default Component;
