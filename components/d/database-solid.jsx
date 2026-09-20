import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0vsx1bvb.css';
import '../../css/b/bv9_cdbnc.css';
import '../../css/e/eb4pmym9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0vsx1bvb"/><path clip-rule="evenodd" class="bv9_cdbnc"/><path clip-rule="evenodd" class="eb4pmym9o"/>`,
		"fallback": "streamline-plump:database-solid",
	});
}

export default Component;
