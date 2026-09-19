import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kzx5c9b0m.css';
import '../../css/y/y8p4lccnd.css';
import '../../css/c/cg5yr93ex.css';
import '../../css/q/qr74q9btr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNdN36c1x"><g class="rohhhzb0l"><path class="kzx5c9b0m"/><path class="y8p4lccnd"/><circle class="cg5yr93ex"/><path class="qr74q9btr"/></g></mask></defs><path mask="url(#SVGNdN36c1x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:disabled-laptop",
	});
}

export default Component;
