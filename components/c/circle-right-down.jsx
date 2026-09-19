import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/u/us8q08b6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAtk1EcxV"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="us8q08b6o"/></g></mask></defs><path mask="url(#SVGAtk1EcxV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:circle-right-down",
	});
}

export default Component;
