import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/s-kistkta.css';
import '../../css/u/u-8_srfhg.css';
import '../../css/h/hv9f26_mj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXL1SydBb"><g class="ufeehvblu"><path class="s-kistkta"/><path class="u-8_srfhg"/><path class="hv9f26_mj"/></g></mask></defs><path mask="url(#SVGXL1SydBb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-five",
	});
}

export default Component;
