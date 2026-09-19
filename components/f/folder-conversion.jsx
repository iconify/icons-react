import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/e/e-34k0pmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI5IQQeEQ"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="e-34k0pmd"/></g></mask></defs><path mask="url(#SVGI5IQQeEQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-conversion",
	});
}

export default Component;
