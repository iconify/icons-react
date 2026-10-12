import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqau0ibzp.css';
import '../../css/k/kpwe2lb7m.css';
import '../../css/d/djiwjacqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqau0ibzp"/><path clip-rule="evenodd" class="kpwe2lb7m"/><path class="djiwjacqk"/>`,
		"fallback": "lucide-extended:cassette-tape-filled",
	});
}

export default Component;
