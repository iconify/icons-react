import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inf1nzbws.css';
import '../../css/m/mjeguwb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inf1nzbws"/><path class="mjeguwb9t"/>`,
		"fallback": "basil:image-solid",
	});
}

export default Component;
