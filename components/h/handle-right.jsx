import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vcum2uxal.css';
import '../../css/o/odgo2qjxq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe5DFsbhx"><g class="ufeehvblu"><rect class="vcum2uxal"/><path class="odgo2qjxq"/></g></mask></defs><path mask="url(#SVGe5DFsbhx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-right",
	});
}

export default Component;
