import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djrforfsc.css';
import '../../css/l/lylrjtb6a.css';
import '../../css/a/ak97f6bnh.css';
import '../../css/o/opwr92bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djrforfsc wm-a"/><path class="lylrjtb6a wm-k"/><path class="ak97f6bnh wm-k"/><path class="opwr92bel wm-k"/>`,
		"fallback": "withicons-bauhaus:binoculars",
	});
}

export default Component;
