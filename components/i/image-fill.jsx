import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smbn1vbdh.css';
import '../../css/g/ghwq-ivuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smbn1vbdh"/><path class="ghwq-ivuc"/>`,
		"fallback": "mage:image-fill",
	});
}

export default Component;
