import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y7c-tkbkg.css';
import '../../css/g/ger36zmtv.css';
import '../../css/j/j3yvlke8a.css';
import '../../css/m/m8151hbws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiPQFJd5l"><g class="s9cl3zbei"><path class="y7c-tkbkg"/><path class="ger36zmtv"/><path class="j3yvlke8a"/><path class="m8151hbws"/></g></mask></defs><path mask="url(#SVGiPQFJd5l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:disk",
	});
}

export default Component;
