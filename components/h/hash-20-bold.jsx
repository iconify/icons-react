import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvx3ydb_k.css';
import '../../css/n/nov116bwc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvx3ydb_k"/><path class="nov116bwc"/>`,
		"fallback": "energy-icons:hash-20-bold",
	});
}

export default Component;
