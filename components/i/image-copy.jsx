import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tliyki-wu.css';
import '../../css/s/s70ezsbfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tliyki-wu"/><path class="s70ezsbfg"/>`,
		"fallback": "carbon:image-copy",
	});
}

export default Component;
