import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz37bn_-f.css';
import '../../css/g/gnnj1jfmz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz37bn_-f"/><path class="gnnj1jfmz"/>`,
		"fallback": "material-icon-theme:folder-download",
	});
}

export default Component;
