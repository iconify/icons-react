import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/c/cwqrr8b_o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKOBRaczu"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="cwqrr8b_o"/></g></mask></defs><path mask="url(#SVGKOBRaczu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-right-bottom",
	});
}

export default Component;
