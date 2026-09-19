import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh210v_jq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zh210v_jq"/>`,
		"fallback": "glyphs:grin-beam-bold",
	});
}

export default Component;
