import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtyomgb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtyomgb2w"/>`,
		"fallback": "thesvg-color:codex-openai",
	});
}

export default Component;
