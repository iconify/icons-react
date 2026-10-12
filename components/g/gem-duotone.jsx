import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx5zbbcme.css';
import '../../css/c/ckklebgfu.css';
import '../../css/w/wwfotzu4b.css';
import '../../css/m/muh-rwynb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zx5zbbcme"/><path class="ckklebgfu"/><path class="wwfotzu4b"/><path class="muh-rwynb"/></g>`,
		"fallback": "lucide-extended:gem-duotone",
	});
}

export default Component;
