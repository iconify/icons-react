import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kmeqsm6xb.css';
import '../../css/x/xji954c1a.css';
import '../../css/v/vekwe-1ik.css';
import '../../css/m/mo94rtywa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGG9edzcsD"><g class="rohhhzb0l"><circle class="kmeqsm6xb"/><path class="xji954c1a"/><circle class="vekwe-1ik"/><path class="mo94rtywa"/></g></mask></defs><path mask="url(#SVGG9edzcsD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:glasses-three",
	});
}

export default Component;
