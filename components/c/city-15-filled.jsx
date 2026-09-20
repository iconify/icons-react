import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsd2t5i5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsd2t5i5j"/>`,
		"fallback": "tdesign:city-15-filled",
	});
}

export default Component;
