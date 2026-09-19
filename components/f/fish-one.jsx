import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2saun4pc.css';
import '../../css/o/oxf976bet.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbm9eqezi"><g class="ft5dv1b6b"><path class="h2saun4pc"/><circle class="oxf976bet"/></g></mask></defs><path mask="url(#SVGbm9eqezi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:fish-one",
	});
}

export default Component;
