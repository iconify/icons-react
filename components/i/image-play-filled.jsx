import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tst_x0jpw.css';
import '../../css/t/twmjonw6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tst_x0jpw"/><path clip-rule="evenodd" class="twmjonw6y"/>`,
		"fallback": "lucide-extended:image-play-filled",
	});
}

export default Component;
