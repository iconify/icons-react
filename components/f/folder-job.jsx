import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud3_pd4ak.css';
import '../../css/r/rhohvnbdk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud3_pd4ak"/><path class="rhohvnbdk"/>`,
		"fallback": "material-icon-theme:folder-job",
	});
}

export default Component;
