import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/optxjnmeh.css';
import '../../css/g/gha7d3b_u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtnsVodpN"><g class="v3_i3wktz"><path class="optxjnmeh"/><path class="gha7d3b_u"/></g></mask></defs><path mask="url(#SVGtnsVodpN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-left",
	});
}

export default Component;
