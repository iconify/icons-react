import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgga7abld.css';
import '../../css/h/h8sbx2b5d.css';
import '../../css/n/nzovm6bgd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGueEmudQp"><g class="cgga7abld"><path class="h8sbx2b5d"/><path class="nzovm6bgd"/></g></mask></defs><path mask="url(#SVGueEmudQp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gymnastics",
	});
}

export default Component;
