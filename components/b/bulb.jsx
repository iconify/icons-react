import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv-4iu9us.css';
import '../../css/e/effisz2bi.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xqkjckbge.css';
import '../../css/j/jhumg9bwm.css';
import '../../css/e/eiol7hbmk.css';
import '../../css/p/pgy1dcc5m.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tv-4iu9us"/><clipPath id="SVGlgah6cRj"><circle class="effisz2bi"/></clipPath><g clip-path="url(#SVGlgah6cRj)" clip-rule="evenodd" class="d2kvgvbvc"><path class="xqkjckbge"/><path class="jhumg9bwm"/><path class="eiol7hbmk"/><path class="pgy1dcc5m"/></g>`,
		"fallback": "flat-ui:bulb",
	});
}

export default Component;
