import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr2q03bgv.css';
import '../../css/z/z00ni0b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr2q03bgv"/><path class="z00ni0b7q"/>`,
		"fallback": "streamline-ultimate:audio-file-mp-3-bold",
	});
}

export default Component;
