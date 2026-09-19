import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/v/vihc9mssv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVQ9zscQF"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="vihc9mssv"/></g></mask></defs><path mask="url(#SVGVQ9zscQF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:grinning-face-with-squinting-eyes",
	});
}

export default Component;
