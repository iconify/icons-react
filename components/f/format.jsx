import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/r/rqf9totdd.css';
import '../../css/h/h6d9v6b8u.css';
import '../../css/s/sv-ds5b4v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtc8sceDf"><g class="hv130ab-t"><path class="rqf9totdd"/><path class="h6d9v6b8u"/><path class="sv-ds5b4v"/></g></mask></defs><path mask="url(#SVGtc8sceDf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:format",
	});
}

export default Component;
