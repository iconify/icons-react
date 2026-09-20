import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tewny_bsl.css';
import '../../css/i/ichklriki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tewny_bsl"/><path clip-rule="evenodd" class="ichklriki"/>`,
		"fallback": "token:chiliz",
	});
}

export default Component;
