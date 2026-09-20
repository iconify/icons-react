import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5gcds8nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u5gcds8nh"/>`,
		"fallback": "streamline-sharp:ai-generate-voice-spark-2-remix",
	});
}

export default Component;
