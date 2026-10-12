import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfwdc41th.css';
import '../../css/l/lci61mkfz.css';
import '../../css/a/a8kb4gb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfwdc41th"/><path class="lci61mkfz"/><path class="a8kb4gb9t"/>`,
		"fallback": "garden:file-search-stroke-20",
	});
}

export default Component;
