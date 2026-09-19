import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k98f580tp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc84LZbFk"><path class="k98f580tp"/></mask></defs><path mask="url(#SVGc84LZbFk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:figma-component",
	});
}

export default Component;
