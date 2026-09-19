import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbsfahbqu.css';
import '../../css/c/cdb_1wbou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbsfahbqu"/><circle class="cdb_1wbou"/>`,
		"fallback": "famicons:build-outline",
	});
}

export default Component;
