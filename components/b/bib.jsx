import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/ajqn6mb9q.css';
import '../../css/u/uh2p8_idr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPvZ9jdEH"><g class="ufeehvblu"><path class="ajqn6mb9q"/><path class="uh2p8_idr"/></g></mask></defs><path mask="url(#SVGPvZ9jdEH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bib",
	});
}

export default Component;
