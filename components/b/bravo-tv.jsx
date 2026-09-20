import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1ypqnbnq.css';
import '../../css/w/wjox9-bub.css';

const viewBox = {"width":999,"height":755};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1ypqnbnq"/><path class="wjox9-bub"/>`,
		"fallback": "thesvg-color:bravo-tv",
	});
}

export default Component;
