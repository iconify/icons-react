import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mymen8byk.css';
import '../../css/h/hgt4vzbwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC7k7Mcas"><g class="rohhhzb0l"><path class="mymen8byk"/><path class="hgt4vzbwi"/></g></mask></defs><path mask="url(#SVGC7k7Mcas)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:html-five",
	});
}

export default Component;
