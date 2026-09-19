import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/g3bzu6tbx.css';
import '../../css/y/y7bupfb4n.css';
import '../../css/f/fm1umgbyy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnjUzDBYM"><g class="hv130ab-t"><path class="g3bzu6tbx"/><path class="y7bupfb4n"/><path class="fm1umgbyy"/></g></mask></defs><path mask="url(#SVGnjUzDBYM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-print",
	});
}

export default Component;
