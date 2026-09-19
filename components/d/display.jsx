import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i89f99xzv.css';
import '../../css/k/krgim9y4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqnHOcdqL"><g class="v3_i3wktz"><rect class="i89f99xzv"/><path class="krgim9y4j"/></g></mask></defs><path mask="url(#SVGqnHOcdqL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:display",
	});
}

export default Component;
