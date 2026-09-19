import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/udz-79kzq.css';
import '../../css/p/pa9_zrbsc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIQLGgV2F"><g class="ufeehvblu"><path class="udz-79kzq"/><path class="pa9_zrbsc"/></g></mask></defs><path mask="url(#SVGIQLGgV2F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:check-one",
	});
}

export default Component;
