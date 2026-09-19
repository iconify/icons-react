import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3wltllsx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdXZvgbiJ"><path class="x3wltllsx"/></mask></defs><path mask="url(#SVGdXZvgbiJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-one",
	});
}

export default Component;
