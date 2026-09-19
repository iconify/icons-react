import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vcum2uxal.css';
import '../../css/c/ca_e16veg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGstbpJbBt"><g class="ufeehvblu"><rect class="vcum2uxal"/><path class="ca_e16veg"/></g></mask></defs><path mask="url(#SVGstbpJbBt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-left",
	});
}

export default Component;
