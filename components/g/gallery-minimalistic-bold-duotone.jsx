import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leiavflem.css';
import '../../css/a/aumpujaom.css';
import '../../css/y/yv4_o-byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="leiavflem"/><path class="aumpujaom"/><path class="yv4_o-byj"/>`,
		"fallback": "solar:gallery-minimalistic-bold-duotone",
	});
}

export default Component;
