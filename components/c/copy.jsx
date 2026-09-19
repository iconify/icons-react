import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gr1__7lov.css';
import '../../css/h/h43ue-8no.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUpRmCb0d"><g class="v3_i3wktz"><path class="gr1__7lov"/><path class="h43ue-8no"/></g></mask></defs><path mask="url(#SVGUpRmCb0d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:copy",
	});
}

export default Component;
