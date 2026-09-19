import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/thjwbcb-r.css';
import '../../css/s/saavl5qcz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFvy1j9DU"><g class="rohhhzb0l"><path class="thjwbcb-r"/><path class="saavl5qcz"/></g></mask></defs><path mask="url(#SVGFvy1j9DU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bolt-one",
	});
}

export default Component;
