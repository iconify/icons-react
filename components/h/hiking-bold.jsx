import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxi8hkb5i.css';
import '../../css/h/hvxzctpfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxi8hkb5i"/><path clip-rule="evenodd" class="hvxzctpfg"/>`,
		"fallback": "solar:hiking-bold",
	});
}

export default Component;
