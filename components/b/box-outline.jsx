import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gebuh6bxe.css';
import '../../css/i/izniwg9qs.css';
import '../../css/t/thka_lb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="box-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="gebuh6bxe"/><path class="izniwg9qs"/><path class="thka_lb0g"/></g></g>`,
		"fallback": "cuida:box-outline",
	});
}

export default Component;
