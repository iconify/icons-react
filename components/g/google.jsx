import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nab6klb5t.css';
import '../../css/b/bdbr-nauf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nab6klb5t"/><path class="bdbr-nauf"/>`,
		"fallback": "icon-park-solid:google",
	});
}

export default Component;
