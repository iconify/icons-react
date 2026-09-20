import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zziz7bc6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zziz7bc6w"/>`,
		"fallback": "pixelarticons:euro-sharp",
	});
}

export default Component;
