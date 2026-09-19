import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bhx7oub5v.css';
import '../../css/m/mb25lk9fi.css';
import '../../css/h/hdew0eczb.css';
import '../../css/w/wx6r6fbbz.css';
import '../../css/d/dolr3bcpw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXUhuLcuq"><g class="ufeehvblu"><path class="bhx7oub5v"/><path class="mb25lk9fi"/><path class="hdew0eczb"/><path class="wx6r6fbbz"/><path class="dolr3bcpw"/></g></mask></defs><path mask="url(#SVGXUhuLcuq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hospital-four",
	});
}

export default Component;
