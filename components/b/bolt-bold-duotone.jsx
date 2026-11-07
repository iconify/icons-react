import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cth7kpfnp.css';
import '../../css/a/azpullbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cth7kpfnp"/><path class="azpullbqc"/>`,
		"fallback": "solar:bolt-bold-duotone",
	});
}

export default Component;
