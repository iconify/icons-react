import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/m/mtj6u6nhh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGij5x3ViN"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="mtj6u6nhh"/></g></mask></defs><path mask="url(#SVGij5x3ViN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-left-top",
	});
}

export default Component;
