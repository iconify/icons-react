import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/z/z2e5f5b3x.css';
import '../../css/e/e6ddg3v6m.css';
import '../../css/g/gysymsbqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrPciNeMA"><g class="hv130ab-t"><path class="z2e5f5b3x"/><path class="e6ddg3v6m"/><path class="gysymsbqn"/></g></mask></defs><path mask="url(#SVGrPciNeMA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:icecream-two",
	});
}

export default Component;
