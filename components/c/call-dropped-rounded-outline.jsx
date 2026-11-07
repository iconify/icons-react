import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo0xsojdd.css';
import '../../css/o/o4sar_bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo0xsojdd"/><path clip-rule="evenodd" class="o4sar_bie"/>`,
		"fallback": "solar:call-dropped-rounded-outline",
	});
}

export default Component;
