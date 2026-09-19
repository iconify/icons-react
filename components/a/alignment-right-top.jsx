import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/p/pawaimrxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2ffRidPe"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="pawaimrxx"/></g></mask></defs><path mask="url(#SVG2ffRidPe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-right-top",
	});
}

export default Component;
