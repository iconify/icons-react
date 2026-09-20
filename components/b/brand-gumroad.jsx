import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n04szjpnk.css';
import '../../css/u/uckd2bc1w.css';
import '../../css/g/gad5smwwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n04szjpnk"/><path class="uckd2bc1w"/><path class="gad5smwwy"/></g>`,
		"fallback": "tabler:brand-gumroad",
	});
}

export default Component;
