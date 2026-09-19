import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vcum2uxal.css';
import '../../css/q/qfy4gx9pp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgJVf2ezG"><g class="ufeehvblu"><rect class="vcum2uxal"/><path class="qfy4gx9pp"/></g></mask></defs><path mask="url(#SVGgJVf2ezG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-up",
	});
}

export default Component;
