import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mxaazra7v.css';
import '../../css/i/i6ln6bcna.css';
import '../../css/v/v-cwrbbvd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsEoBzevV"><g class="rohhhzb0l"><path class="mxaazra7v"/><path class="i6ln6bcna"/><path class="v-cwrbbvd"/></g></mask></defs><path mask="url(#SVGsEoBzevV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:find",
	});
}

export default Component;
