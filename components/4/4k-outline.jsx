import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_as461dm.css';
import '../../css/m/mi_d81xnw.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_as461dm"/><path class="mi_d81xnw"/><path clip-rule="evenodd" class="k_haes9zn"/>`,
		"fallback": "solar:4k-outline",
	});
}

export default Component;
