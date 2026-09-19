import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5nx0ib0j.css';
import '../../css/z/z_rnxebux.css';
import '../../css/x/x3jbftbwu.css';
import '../../css/z/z4uw2acfd.css';
import '../../css/s/sxlpl9tpb.css';
import '../../css/b/boa1yqg3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d5nx0ib0j"/><path class="z_rnxebux"/><path class="x3jbftbwu"/><path class="z4uw2acfd"/><path class="sxlpl9tpb"/><path class="boa1yqg3s"/></g>`,
		"fallback": "fluent-emoji-flat:anxious-face-with-sweat",
	});
}

export default Component;
