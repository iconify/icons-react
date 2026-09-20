import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbbjl8juq.css';
import '../../css/b/b5v4ogcih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbbjl8juq"/><path class="b5v4ogcih"/>`,
		"fallback": "material-icon-theme:folder-test",
	});
}

export default Component;
