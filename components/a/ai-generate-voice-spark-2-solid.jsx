import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ity3c0bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ity3c0bdu"/>`,
		"fallback": "streamline-sharp:ai-generate-voice-spark-2-solid",
	});
}

export default Component;
