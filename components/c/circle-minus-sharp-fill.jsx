import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb0l61w-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nb0l61w-t"/>`,
		"fallback": "keyline-icons:circle-minus-sharp-fill",
	});
}

export default Component;
