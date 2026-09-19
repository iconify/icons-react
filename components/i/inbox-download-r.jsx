import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/h/h-23ectuy.css';
import '../../css/q/qdvu_0p4y.css';
import '../../css/g/g59_oxboi.css';
import '../../css/s/ss2u9ache.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ01gkdVh"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="h-23ectuy"/><path class="qdvu_0p4y"/><path class="g59_oxboi"/><path class="ss2u9ache"/></g></mask></defs><path mask="url(#SVGJ01gkdVh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inbox-download-r",
	});
}

export default Component;
