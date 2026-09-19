import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jgzubvbrf.css';
import '../../css/c/czgk7ibpr.css';
import '../../css/j/jm9rbv43s.css';
import '../../css/c/c0jms3box.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="jgzubvbrf"/><path class="czgk7ibpr"/><path class="jm9rbv43s"/><path class="c0jms3box"/></g>`,
		"fallback": "circle-flags:es-ga",
	});
}

export default Component;
