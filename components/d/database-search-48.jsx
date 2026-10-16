import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzpdxtbdv.css';
import '../../css/v/vf6e2yxfs.css';
import '../../css/v/vtjv8bcfu.css';
import '../../css/a/auaqc0ftv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzpdxtbdv"/><path class="vf6e2yxfs"/><path class="vtjv8bcfu"/><path class="auaqc0ftv"/>`,
		"fallback": "energy-icons:database-search-48",
	});
}

export default Component;
