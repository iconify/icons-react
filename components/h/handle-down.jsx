import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vcum2uxal.css';
import '../../css/n/ngldm-blh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiDrEreoa"><g class="ufeehvblu"><rect class="vcum2uxal"/><path class="ngldm-blh"/></g></mask></defs><path mask="url(#SVGiDrEreoa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-down",
	});
}

export default Component;
