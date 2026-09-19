import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98at3bul.css';
import '../../css/z/z4-r-ybfy.css';
import '../../css/w/wifws7q6t.css';
import '../../css/r/rj9730bre.css';
import '../../css/z/z9r-fmfog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98at3bul"/><circle class="z4-r-ybfy"/><circle class="wifws7q6t"/><circle class="rj9730bre"/><circle class="z9r-fmfog"/>`,
		"fallback": "bx:bx-dice-4",
	});
}

export default Component;
