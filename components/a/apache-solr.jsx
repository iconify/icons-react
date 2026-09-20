import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvejc9b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvejc9b2l"/>`,
		"fallback": "thesvg-color:apache-solr",
	});
}

export default Component;
