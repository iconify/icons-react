import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhrfq9yjx.css';
import '../../css/t/tts1o48wv.css';
import '../../css/e/e2w64zcxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vhrfq9yjx"/><path class="tts1o48wv"/><path class="e2w64zcxy"/>`,
		"fallback": "lucide-extended:beef-off-filled",
	});
}

export default Component;
