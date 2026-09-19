import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/s/s1k8qzb9c.css';
import '../../css/o/odr0o-arz.css';
import '../../css/g/gt2m0dm7y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="s1k8qzb9c"/><rect class="odr0o-arz"/><path class="gt2m0dm7y"/></g>`,
		"fallback": "glyphs-poly:columns-1",
	});
}

export default Component;
