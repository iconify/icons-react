import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmkiuqb-h.css';
import '../../css/i/icpcz1bju.css';
import '../../css/g/gah67z6_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmkiuqb-h"/><circle class="icpcz1bju"/><path class="gah67z6_i"/>`,
		"fallback": "carbon:event-change",
	});
}

export default Component;
