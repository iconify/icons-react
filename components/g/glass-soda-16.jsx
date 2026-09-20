import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz5smomfx.css';
import '../../css/p/p8s9m2bnu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oz5smomfx"/><path class="p8s9m2bnu"/>`,
		"fallback": "qlementine-icons:glass-soda-16",
	});
}

export default Component;
