import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs7ip6b0k.css';
import '../../css/o/od1iqpboh.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs7ip6b0k"/><path class="od1iqpboh"/><circle class="k79q3xboj"/>`,
		"fallback": "ooui:image",
	});
}

export default Component;
