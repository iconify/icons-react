import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb72zx0al.css';
import '../../css/h/hf-vc2b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb72zx0al"/><path class="hf-vc2b6c"/>`,
		"fallback": "boxicons:hospital",
	});
}

export default Component;
