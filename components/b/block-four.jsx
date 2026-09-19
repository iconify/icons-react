import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o52m7dbbd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgUj2T2pb"><path class="o52m7dbbd"/></mask></defs><path mask="url(#SVGgUj2T2pb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-four",
	});
}

export default Component;
