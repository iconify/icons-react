import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/t/tslyostdv.css';
import '../../css/u/unotvibtz.css';
import '../../css/c/cxeyu8bvo.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUMuWhajc"><g class="ukm9jj2re"><path class="tslyostdv"/><circle class="unotvibtz"/><path class="cxeyu8bvo"/></g></mask></defs><path mask="url(#SVGUMuWhajc)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-search-duotone-line",
	});
}

export default Component;
