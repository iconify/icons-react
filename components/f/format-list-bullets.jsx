import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjk15qw-b.css';
import '../../css/a/ahy7r9h0a.css';
import '../../css/i/iuvqghvku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="hjk15qw-b"/><path class="ahy7r9h0a"/><path vector-effect="non-scaling-stroke" class="iuvqghvku"/></g>`,
		"fallback": "wordpress:format-list-bullets",
	});
}

export default Component;
