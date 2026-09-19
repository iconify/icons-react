import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvyl42ogw.css';
import '../../css/l/l252cwxrc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mvyl42ogw"/><path class="l252cwxrc"/>`,
		"fallback": "entypo:creative-commons-sharealike",
	});
}

export default Component;
