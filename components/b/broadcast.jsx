import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bt07rbbav.css';
import '../../css/q/qczan3bwo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGzBIqcAm"><g class="v3_i3wktz"><path class="bt07rbbav"/><path class="qczan3bwo"/></g></mask></defs><path mask="url(#SVGGzBIqcAm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:broadcast",
	});
}

export default Component;
