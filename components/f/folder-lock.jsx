import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/h/hl2afbehv.css';
import '../../css/v/v3leymbnb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjaCtfb4V"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="hl2afbehv"/><path class="v3leymbnb"/></g></mask></defs><path mask="url(#SVGjaCtfb4V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-lock",
	});
}

export default Component;
