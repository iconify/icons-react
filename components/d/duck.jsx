import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5jqbjbnu.css';
import '../../css/r/rc7uwl0at.css';
import '../../css/e/euv-s5b_k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZLkp2GeZ"><g class="ft5dv1b6b"><path class="a5jqbjbnu"/><path class="rc7uwl0at"/><circle class="euv-s5b_k"/></g></mask></defs><path mask="url(#SVGZLkp2GeZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:duck",
	});
}

export default Component;
