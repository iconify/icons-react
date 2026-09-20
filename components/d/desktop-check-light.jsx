import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th5wqpzfa.css';
import '../../css/v/v419d9bma.css';
import '../../css/e/ekturubtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="v419d9bma"/><path class="ekturubtg"/>`,
		"fallback": "stash:desktop-check-light",
	});
}

export default Component;
