import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lmoo01bav.css';
import '../../css/k/k5rx2ix5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyZNfyd1N"><g class="ufeehvblu"><path class="lmoo01bav"/><path class="k5rx2ix5o"/></g></mask></defs><path mask="url(#SVGyZNfyd1N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:application-one",
	});
}

export default Component;
