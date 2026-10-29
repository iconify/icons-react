import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aopv2xt1x.css';
import '../../css/d/dc32apbiq.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/n/n01x6mu7j.css';
import '../../css/b/b29_gwzlq.css';
import '../../css/y/yol0v1bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="aopv2xt1x wm-deco"/><path class="dc32apbiq wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="n01x6mu7j wm-k"/><path class="b29_gwzlq wm-a"/><path class="wm-k yol0v1bgp"/></g>`,
		"fallback": "withicons:christmas-tree-blueprint",
	});
}

export default Component;
