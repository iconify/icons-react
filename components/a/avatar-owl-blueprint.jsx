import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lf-s-9vum.css';
import '../../css/t/t345sdvpm.css';
import '../../css/t/t218te2ox.css';
import '../../css/j/j_gulvb5c.css';
import '../../css/d/djdssxezq.css';
import '../../css/w/wv7-erecy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lf-s-9vum wm-deco"/><path class="t345sdvpm wm-deco"/><path class="t218te2ox wm-deco"/><path class="j_gulvb5c wm-k"/><path class="djdssxezq wm-a"/><path class="wm-k wv7-erecy"/></g>`,
		"fallback": "withicons:avatar-owl-blueprint",
	});
}

export default Component;
