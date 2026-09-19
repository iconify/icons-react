import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x65kp3cdr.css';
import '../../css/s/sg6tecbtd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIDphUdDF"><g class="ft5dv1b6b"><path class="x65kp3cdr"/><circle class="sg6tecbtd"/></g></mask></defs><path mask="url(#SVGIDphUdDF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:dolphin",
	});
}

export default Component;
