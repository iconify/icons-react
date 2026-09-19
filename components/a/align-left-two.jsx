import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4qqmmb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9ZpiTHEA"><path class="r4qqmmb7p"/></mask></defs><path mask="url(#SVG9ZpiTHEA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-left-two",
	});
}

export default Component;
