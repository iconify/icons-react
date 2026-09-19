import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg9sienad.css';
import '../../css/k/kw60brbej.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fg9sienad"/><path class="kw60brbej"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:adobe-experince-design-outline",
	});
}

export default Component;
