import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/ct1r7w1hv.css';
import '../../css/l/lmhlr-bsl.css';
import '../../css/x/xu7x7kbnb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6S9q1S5Z"><g class="v3_i3wktz"><path class="ct1r7w1hv"/><path class="lmhlr-bsl"/><path class="xu7x7kbnb"/></g></mask></defs><path mask="url(#SVG6S9q1S5Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inbox-in",
	});
}

export default Component;
