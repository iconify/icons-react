import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plfdthb2m.css';
import '../../css/y/y7zj29b0m.css';
import '../../css/x/xo2xcjy6n.css';
import '../../css/x/xwbjtf4oa.css';
import '../../css/p/pz_3i-5iq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="plfdthb2m"><rect class="y7zj29b0m"/><rect class="xo2xcjy6n"/><rect class="xwbjtf4oa"/><rect class="pz_3i-5iq"/></g>`,
		"fallback": "glyphs:grid-bold",
	});
}

export default Component;
