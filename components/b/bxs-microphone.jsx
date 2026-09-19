import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl7t8bcmf.css';
import '../../css/y/yzdqdzd3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl7t8bcmf"/><path class="yzdqdzd3n"/>`,
		"fallback": "bx:bxs-microphone",
	});
}

export default Component;
