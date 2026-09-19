import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu9k0z8qm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAZIpbcqT"><path class="tu9k0z8qm"/></mask></defs><path mask="url(#SVGAZIpbcqT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamond-two",
	});
}

export default Component;
