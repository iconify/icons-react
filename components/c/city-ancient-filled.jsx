import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v78162bxf.css';
import '../../css/g/gxoekfbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v78162bxf"/><path class="gxoekfbju"/>`,
		"fallback": "tdesign:city-ancient-filled",
	});
}

export default Component;
