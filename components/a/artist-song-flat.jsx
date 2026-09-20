import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ovhkuab4e.css';
import '../../css/z/zdfbltbsk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ovhkuab4e"/><path class="zdfbltbsk"/></g>`,
		"fallback": "streamline-flex-color:artist-song-flat",
	});
}

export default Component;
