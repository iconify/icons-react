import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/l/l8x7f9b9k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHL01ablt"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="l8x7f9b9k"/></g></mask></defs><path mask="url(#SVGHL01ablt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-vertical-right",
	});
}

export default Component;
