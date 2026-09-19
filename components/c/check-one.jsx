import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qkvyde2_l.css';
import '../../css/h/h13c8cb6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBM25vJeV"><g class="v3_i3wktz"><path class="qkvyde2_l"/><path class="h13c8cb6j"/></g></mask></defs><path mask="url(#SVGBM25vJeV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:check-one",
	});
}

export default Component;
