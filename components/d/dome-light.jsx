import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fn-t654mq.css';
import '../../css/x/x7sf2z-_n.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGarZUzeXi"><g class="aql7dnt-u"><path class="fn-t654mq"/><path class="x7sf2z-_n"/></g></mask></defs><path mask="url(#SVGarZUzeXi)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:dome-light",
	});
}

export default Component;
