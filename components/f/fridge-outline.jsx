import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zit9a7yxo.css';
import '../../css/b/br0wqld1w.css';
import '../../css/h/hqpwl64dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zit9a7yxo"/><path class="br0wqld1w"/><path clip-rule="evenodd" class="hqpwl64dn"/>`,
		"fallback": "solar:fridge-outline",
	});
}

export default Component;
