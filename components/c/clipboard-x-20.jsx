import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3dnqqxo.css';
import '../../css/r/rsg8pgg3u.css';
import '../../css/x/x58z-5d-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3dnqqxo"/><path class="rsg8pgg3u"/><path class="x58z-5d-h"/>`,
		"fallback": "energy-icons:clipboard-x-20",
	});
}

export default Component;
