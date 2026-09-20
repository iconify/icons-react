import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6i__zbof.css';
import '../../css/t/th5wqpzfa.css';
import '../../css/q/qfnkoxw6w.css';
import '../../css/i/i6jalmb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6i__zbof"/><path clip-rule="evenodd" class="th5wqpzfa"/><path clip-rule="evenodd" class="qfnkoxw6w"/><path class="i6jalmb5o"/>`,
		"fallback": "stash:desktop-check-duotone",
	});
}

export default Component;
