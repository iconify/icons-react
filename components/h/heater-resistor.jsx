import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/ag041nb8r.css';
import '../../css/q/q-jxeyn0g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi6jqRcXl"><g class="v3_i3wktz"><rect transform="rotate(-45 9.858 29.657)" class="ag041nb8r"/><path class="q-jxeyn0g"/></g></mask></defs><path mask="url(#SVGi6jqRcXl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:heater-resistor",
	});
}

export default Component;
