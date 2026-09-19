import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_n7fwc3g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpLVWObsf"><path class="l_n7fwc3g"/></mask></defs><path mask="url(#SVGpLVWObsf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-vertical-center-two",
	});
}

export default Component;
