import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xxb39ebcb.css';
import '../../css/o/oivngaclw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4ESTvmZj"><g class="hv130ab-t"><path clip-rule="evenodd" class="xxb39ebcb"/><path class="oivngaclw"/></g></mask></defs><path mask="url(#SVG4ESTvmZj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inner-shadow-top-left",
	});
}

export default Component;
