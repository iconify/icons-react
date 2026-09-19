import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kb3w1gazs.css';
import '../../css/b/b0al4ebio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8CB7dcHl"><g class="v3_i3wktz"><path class="kb3w1gazs"/><path class="b0al4ebio"/></g></mask></defs><path mask="url(#SVG8CB7dcHl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-proportion",
	});
}

export default Component;
