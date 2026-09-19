import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/l/l8in5mb0b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7oxRfe1M"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="l8in5mb0b"/></g></mask></defs><path mask="url(#SVG7oxRfe1M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-right-center",
	});
}

export default Component;
