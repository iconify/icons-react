import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th5wqpzfa.css';
import '../../css/a/ac63k3-ur.css';
import '../../css/h/h5cwullwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="ac63k3-ur"/><path class="h5cwullwo"/>`,
		"fallback": "stash:desktop-check-solid",
	});
}

export default Component;
