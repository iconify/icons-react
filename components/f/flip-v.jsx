import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h487fqb7i.css';
import '../../css/q/qr1w69buc.css';
import '../../css/i/i72xiccgx.css';
import '../../css/v/v3931n20j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h487fqb7i"/><path class="qr1w69buc"/><path class="i72xiccgx"/><path class="v3931n20j"/>`,
		"fallback": "uim:flip-v",
	});
}

export default Component;
