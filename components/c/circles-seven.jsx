import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktrttabkl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN8D5Ad5C"><path clip-rule="evenodd" class="ktrttabkl"/></mask></defs><path mask="url(#SVGN8D5Ad5C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circles-seven",
	});
}

export default Component;
