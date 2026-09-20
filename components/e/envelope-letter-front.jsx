import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkxnn-bnx.css';
import '../../css/v/vrxehybcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkxnn-bnx"/><path class="vrxehybcw"/>`,
		"fallback": "streamline-freehand:envelope-letter-front",
	});
}

export default Component;
