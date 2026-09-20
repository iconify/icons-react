import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haf1n5bdl.css';
import '../../css/x/xtz1kbe1h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haf1n5bdl"/><path class="xtz1kbe1h"/>`,
		"fallback": "material-icon-theme:folder-project-open",
	});
}

export default Component;
