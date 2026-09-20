import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxh9xub-j.css';
import '../../css/j/juiwqcb2u.css';
import '../../css/n/nncmxpb2n.css';
import '../../css/b/bucyfy22j.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-path="url(#SVGbZii27FA)"><path class="hxh9xub-j"/><path class="juiwqcb2u"/><path class="nncmxpb2n"/><path class="bucyfy22j"/></g><defs><clipPath id="SVGbZii27FA"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "thesvg:google-search-console",
	});
}

export default Component;
