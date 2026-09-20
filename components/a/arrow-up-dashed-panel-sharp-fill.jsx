import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsaecdcax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsaecdcax"/>`,
		"fallback": "keyline-icons:arrow-up-dashed-panel-sharp-fill",
	});
}

export default Component;
