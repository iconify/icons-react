import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8dem8bar.css';
import '../../css/g/gyqp2acas.css';
import '../../css/j/jvoh6cbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8dem8bar"/><path clip-rule="evenodd" class="gyqp2acas"/><path class="jvoh6cbav"/>`,
		"fallback": "stash:desktop-check",
	});
}

export default Component;
